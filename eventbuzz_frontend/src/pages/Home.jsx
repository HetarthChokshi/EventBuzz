import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/Home.css';
import HomeCarousel from './HomeCarousel.jsx';

export default function Home() {
	const [username, setUsername] = useState("")
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const [movies, setMovies] = useState([]);
	const [events, setEvents] = useState([]);
	const [sports, setSports] = useState([]);

	useEffect(() => {
		const checkLoggedInUser = async () => {
			try {
				const token = localStorage.getItem("accessToken")
				if (token) {
					const config = {
						headers: {
							"Authorization": `Bearer ${token}`
						}
					}
					const response = await axios.get("http://127.0.0.1:8000/api/user/", config)
					setIsLoggedIn(true)
					setUsername(response.data.username)
				}
				else {
					setIsLoggedIn(false)
					setUsername("")
				}
			} catch (error) {
				setIsLoggedIn(false)
				setUsername("")
			}
		}
		checkLoggedInUser()
		fetchMovies()
		fetchEvents()
		fetchSports()
	}, [])

	const handleLogout = async () => {
		try {
			const accessToken = localStorage.getItem("accessToken");
			const refreshToken = localStorage.getItem("refreshToken");

			if (accessToken && refreshToken) {
				const config = {
					headers: {
						"Authorization": `Bearer ${accessToken}`
					}
				};
				await axios.post("http://127.0.0.1:8000/api/logout/", { "refresh": refreshToken }, config)
				localStorage.removeItem("accessToken");
				localStorage.removeItem("refreshToken");
				setIsLoggedIn(false);
				setUsername("");
				console.log("Log out successful!")
			}
		}
		catch (error) {
			console.error("Failed to logout", error.response?.data || error.message)
		}

		const loadSwiperContent = {}

	}

	const fetchMovies = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:8000/api/movies/');
			setMovies(response.data);
			console.log(response.data)
		} catch (error) {
			console.error("Failed to fetch movies", error);
		}
	};

	const fetchEvents = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:8000/api/events/');
			setEvents(response.data);
			console.log(response.data)
		} catch (error) {
			console.error("Failed to fetch movies", error);
		}
	};

	const fetchSports = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:8000/api/sports/');
			setSports(response.data);
			console.log(response.data)
		} catch (error) {
			console.error("Failed to fetch movies", error);
		}
	};


	return (
		<>
			<HomeCarousel />
			<div id='home'>
				<h1 className="title"> &nbsp; Recommended Movies</h1>
				<div>
					{isLoggedIn ?
						(<>
							<h2> Hi, {username}. Thanks for logging in!</h2>
							<button onClick={handleLogout}> Logout</button>
						</>)
						: (<h2> Please Login</h2>)
					}
				</div>
				<div className="movies-list" id="Movies">
					<div className="card-container">
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y]}
							slidesPerView={5}
							spaceBetween={20} // Adjust space between slides
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}}
							breakpoints={{
								320: { slidesPerView: 1 }, // Mobile view
								640: { slidesPerView: 2 }, // Tablets
								1024: { slidesPerView: 3 }, // Small Desktops
								1440: { slidesPerView: 5 }  // Large Desktops
							}}
							onSwiper={(swiper) => console.log(swiper)}
							onSlideChange={() => console.log('slide change')}
						>
							{movies.map(movie => (
								<SwiperSlide>

									<div className="movie">
										<Link to={`/movie/${movie.movie_id}`} className="card">
											<div className="card">
												<img src={movie.poster_path} className="card-img" alt={movie.movie_name} />
												<div className="card-body">
													<ion-icon name="heart-sharp" />
													<p>{movie.like_percentage}%  {movie.votes} votes</p>
												</div>
											</div>
										</Link>
										<h3>{movie.movie_name}</h3>
										<p className="detail">{movie.genres}</p>
									</div>

								</SwiperSlide>
							))}
						</Swiper>
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</div>
				</div>
				<div className="events">
					<h1 className="title">&nbsp; Popular Events</h1>
					<div className="movies-list" id="Events">
						<div className="card-container">

							{events.map(event => (
								<div className="movie">
									<Link to={`/events/${event.event_id}`} className="card">
										<div className="card">
											<img src={event.poster_path} className="card-img" alt={event.event_name} />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>{event.like_percentage}%   {event.votes} votes</p>
											</div>
										</div>
									</Link>
									<h3>{event.event_name}</h3>
									<p className="detail">{event.venue}</p>
								</div>
							))}
						</div>
					</div>
				</div>


				<div className="sports">
					<h1 className="title">&nbsp; Sports</h1>
					<div className="movies-list" id="Sports">
						<div className="card-container">
							{sports.map((sport =>
								<div className="movie">
									<Link to={`/sports/${sport.sport_id}`} className="card">
										<div className="card">
											<img src={sport.poster_path} className="card-img" alt={sport.sport_name} />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>{sport.like_percentage}%   {sport.votes} votes</p>
											</div>
										</div>
									</Link>
									<h3>{sport.sport_name}</h3>
									<p className="detail">Venue To be Announced</p>
								</div>
							))}
						</div>
					</div>
				</div>


			</div>
		</>
	)
}
