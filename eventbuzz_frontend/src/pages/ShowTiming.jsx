import React, { useState } from 'react';
import '../styles/ShowTiming.css'; // Ensure you import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShowTiming() {
  const [selectedDate, setSelectedDate] = useState('');
  const [theatres, setTheatre] = useState([]);
  const navigate =useNavigate();
  // const movieName = "Stree 2";
  const movieId = sessionStorage.getItem('movie_id');
  const movieName = sessionStorage.getItem('movie_name');

  const handleShowTimeClick = (theatreName, showTime) => {
    // Save theatreName and showTime to session storage
    sessionStorage.setItem('theatre_name', theatreName);
    sessionStorage.setItem('showtime', showTime);
    navigate("/seatLayout");
  };

  const fetchShows=async ()=>{
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/theatres/${movieId}/${selectedDate}/`);
      console.log(response.data);
      setTheatre(response.data)
  } catch (error) {
      console.error("Failed to fetch movie", error);
  }
  }
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    fetchShows();
  };
  

  return (
    <div className='body-container'>
      <div className="theatre-showings">
        <h1 className="movie-name">{movieName}</h1>
        <div className="date-picker-container">
          <label htmlFor="datePicker">Select Date: </label>
          <input
            type="text"
            id="datePicker"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="main-container">
          {theatres.map((theatres, index) => (
            <div key={index} className="theatre-container">
              <h3 className="theatre-name">{theatres.theatre}</h3>
              <div className="show-timings">
                {theatres.show_timing.map((show_timing, i) => (
                  <button
                    key={i}
                    className="show-time-button"
                    onClick={() => handleShowTimeClick(theatres.theatre, show_timing)}
                  >
                    {show_timing}
                  </button>
                ))}
              </div>
              {index < theatres.length - 1 && <hr className="divider" />} {/* Adds a line between theatre containers */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowTiming;
