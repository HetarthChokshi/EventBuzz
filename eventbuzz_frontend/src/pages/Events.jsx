import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Events.css';
const Events = () => {

    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/events/${eventId}/`);
                setEvent(response.data);
            } catch (error) {
                console.error("Failed to fetch event", error);
            }
        };
        fetchEvent()
    }, [eventId])

    return (
        <div>
            {event ? (
                <>
                    <div className="top_img">
                        <img src={event.banner_path} alt={event.event_name} className='main_img' />
                    </div>
                    <br /><br />
                    <div className="event_description">
                        <span className="title">{event.event_name}</span><br />
                        <hr className="horizontal_line_mid" /><br />
                        <span className="description">
                            {event.genre} | {event.languages} | {event.age_limit} <br />
                            <img className="location" src="/images/calander.png" alt="Calendar Icon" />
                            Date: {event.date}
                        </span>
                        <br />
                        <span className="description">
                            <img className="location" src="/images/location.png" alt="Location Icon" />
                            Venue: {event.venue}
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

export default Events;
