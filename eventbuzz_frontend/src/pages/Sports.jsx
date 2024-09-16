import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Events.css';
const Sports = () => {

    const { sportsId } = useParams();
    const [sport, setSport] = useState(null);

    useEffect(() => {
        const fetchSport = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/sports/${sportsId}/`);
                setSport(response.data);
            } catch (error) {
                console.error("Failed to fetch sport", error);
            }
        };
        fetchSport()
    }, [sportsId])

    return (
        <div>
            {sport ? (
                <>
                    <div className="top_img">
                        <img src={sport.banner_path} alt={sport.sport_name} className='main_img' />
                    </div>
                    <br /><br />
                    <div className="event_description">
                        <span className="title">{sport.sport_name}</span><br />
                        <hr className="horizontal_line_mid" /><br />
                        <span className="description">
                            {sport.category} | {sport.duration} <br />
                            <img className="location" src="/images/calander.png" alt="Calendar Icon" />
                            Date: {sport.date}
                        </span>
                        <br />
                        <span className="description">
                            <img className="location" src="/images/location.png" alt="Location Icon" />
                            Venue: {sport.venue}
                        </span><br />
                        <hr className="horizontal_line_mid" /><br />
                        <div>
                            <a href="#" className="booking_button">
                                <button className="btn text-white Book_Now">Book Now</button>
                            </a>
                        </div><br />
                        <hr className="horizontal_line_mid" /><br />
                    </div>
                </>
            ) : (
                <div>Loading...</div> // Display a loading message while the event data is being fetched
            )}
            <footer>
                <div className="footerContainer">
                    <div className="socialIcons">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-google-plus"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footerBottom">
                    <p>Copyright &copy;2023; Designed by <span className="designer">Byte Benders</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Sports;
