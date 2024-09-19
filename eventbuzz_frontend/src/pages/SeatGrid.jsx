import React, { useState,useEffect } from 'react';
import '../styles/SeatGrid.css'; // Import the CSS file for styling
import axios from 'axios';


const SeatGrid = () => {
  const [seatData, setSeatData] = useState({});
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  var showID=sessionStorage.getItem('show_id');
  // var showID=576;

  const parseSeatsString = (seatsString) => {
    try {
      // Replace single quotes with double quotes
      const correctedString = seatsString.replace(/'/g, '"');
  
      // Parse the corrected string to a JSON object
      const jsonObject = JSON.parse(correctedString);
  
      return jsonObject;
    } catch (error) {
      console.error("Error parsing seats string:", error);
      return null;
    }
  };
  const fetchSeats = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/seatsLayout/${showID}`
      );
      console.log(response.data);
      const seats = response.data.seats;
      const parsedSeatData = parseSeatsString(seats); // Assuming `seats` is a JSON string
      setSeatData(parsedSeatData); // Use React state to store the parsed data
    } catch (error) {
      console.error("Failed to fetch seats", error);
    }
  };

  const handleSeatClick = (seatId) => {
    if (seatData[seatId] === 1) return; // Don't allow clicking on occupied seats
   
    setSelectedSeats((prevSelectedSeats) => {
      const newSelectedSeats = new Set(prevSelectedSeats);
      if (newSelectedSeats.has(seatId)) {
        newSelectedSeats.delete(seatId);
      } else {
        newSelectedSeats.add(seatId);
      }
      sessionStorage.setItem('selectedSeats', JSON.stringify(Array.from(newSelectedSeats)));
      return newSelectedSeats;
    });
  
  };

  useEffect(() => {
    console.log('Selected seats:', selectedSeats);
    fetchSeats();
  }, [selectedSeats]); // to display the selected seats in console while selecting

  const getSeatRows = () => {
    console.log("start")
    var rows = [];
    for (let row = 'A'; row <= 'H'; row = String.fromCharCode(row.charCodeAt(0) + 1)) {
      var seats = [];
      for (let seatNumber = 1; seatNumber <= 10; seatNumber++) {
        const seatId = `${row}${seatNumber}`;
        seats.push(
          <div
            key={seatId}
            className={`seat ${seatData[seatId] === 1
                ? 'occupied'
                : selectedSeats.has(seatId)
                  ? 'selected'
                  : ''
              }`}
            onClick={() => handleSeatClick(seatId)}
          >
            {seatNumber}
          </div>
        );
      }
      rows.push(
        <div key={row} className="seat-row">
          <div className="row-label">{row}</div>
          <div className="row-seats">{seats}</div>
        </div>
      );
    }
    
    return rows;
  };

  return (
  <>
  <div className="seat-grid">{getSeatRows()}</div>
  </>
  );
};

export default SeatGrid;
