import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

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
	})

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
	}
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
							<SwiperSlide>
								<div className="movie">
									<a href="html/Dune_Part_2.html" className='card'>
										<div className="card">
											<img src="/images/movie_img/stree2/poster.avif" className="card-img" alt="" />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>94% 14k votes</p>
											</div>
										</div>
									</a>
									<h3>Stree 2: Sarkate Ka Aatank</h3>
									<p className="detail">Comedy/Horror</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="movie">
									<a href="html/Dune_Part_1.html" className='card'>
										<div className="card">
											<img src="/images/movie_img/deadpool-and-wolverine/poster.avif" className="card-img" alt="" />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>94% 14k votes</p>
											</div>
										</div>
									</a>
									<h3>Deadpool & Wolverine</h3>
									<p className="detail">Action/Adventure/Comedy</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="movie">
									<a href="html/Dune_Part_2.html" className='card'>
										<div className="card">
											<img src="/images/movie_img/3-ekka/poster.jpeg" className="card-img" alt="" />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>94% 14k votes</p>
											</div>
										</div>
									</a>
									<h3>3 EKKA</h3>
									<p className="detail">Comedy/Crime</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="movie">
									<a href="/movie" className='card'>
										<div className="card">
											<img src="/images/movie_img/kill/poster.avif" className="card-img" alt="" />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>94% 14k votes</p>
											</div>
										</div>
									</a>
									<h3>KILL</h3>
									<p className="detail">Action/Thriller</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="movie">
									<a href="html/Dune_Part_2.html" className='card'>
										<div className="card">
											<img src="/images/movie_img/kalki-2898-AD/poster.jpeg" className="card-img" alt="" />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>94% 14k votes</p>
											</div>
										</div>
									</a>
									<h3>Kalki 2898 AD</h3>
									<p className="detail">Sci-fi/Adventure</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="movie">
									<a href="/movie" className='card'>
										<div className="card">
											<img src="/images/movie_img/hu-ane-tu/poster.jpeg" className="card-img" alt="" />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>94% 14k votes</p>
											</div>
										</div>
									</a>
									<h3>Hu ane Tu</h3>
									<p className="detail">Comedy/Drama/Romantic</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="movie">
									<a href="html/Dune_Part_2.html" className='card'>
										<div className="card">
											<img src="/images/movie_img/devara/poster.avif" className="card-img" alt="" />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>94% 14k votes</p>
											</div>
										</div>
									</a>
									<h3>Devara - Part 1</h3>
									<p className="detail">Action/Drama/Thriller</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="movie">
									<a href="html/Dune_Part_2.html" className='card'>
										<div className="card">
											<img src="/images/movie_img/vedaa/poster.avif" className="card-img" alt="" />
											<div className="card-body">
												<ion-icon name="heart-sharp" />
												<p>94% 14k votes</p>
											</div>
										</div>
									</a>
									<h3>Vedaa</h3>
									<p className="detail">Action/Drama</p>
								</div>
							</SwiperSlide>
						</Swiper>
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</div>
				</div>
				<div className="events">
					<h1 className="title">&nbsp; Popular Events</h1>
					<div className="movies-list" id="Events">
						<div className="card-container">
							<div className="movie">
								<a href="html/Alan_Walker.html">
									<div className="card">
										<img src="/images/event_img/tcf-all-star/poster.avif" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>93%   25k votes</p>
										</div>
									</div>
								</a>
								<h3>Sunburn Arena-Ft.Alan Walker</h3>
								<p className="detail">Venue To be Announced</p>
							</div>
							<div className="movie">
								<a href="html/Sunburn_Goa.html">
									<div className="card">
										<img src="/images/event_img/alan-walker/poster.jpg" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>92%   16k votes</p>
										</div>
									</div>
								</a>
								<h3>Sunburn Chandigarh</h3>
								<p className="detail">Holi Festival</p>
							</div>
							<div className="movie">
								<a href="html/Probuzz_S2.html">
									<div className="card">
										<img src="/images/event_img/akash-gupta/poster.jpeg" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>94%   14k votes</p>
										</div>
									</div>
								</a>
								<h3>Probuzz Fiesta Season-2</h3>
								<p className="detail">Vrundavan Premium Lawn</p>
							</div>
							<div className="movie">
								<a href="html/Open_Mic.html">
									<div className="card">
										<img src="/images/event_img/indian-ocean/poster.jpeg" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>59%   74k votes</p>
										</div>
									</div>
								</a>
								<h3>Open Mic-StandUp</h3>
								<p className="detail">The Comedy Factory </p>
							</div>
							<div className="movie">
								<a href="html/Baap_Ko_Mat_Sikha.html">
									<div className="card">
										<img src="/images/event_img/mandli/poster.avif" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>87%   34k votes</p>
										</div>
									</div>
								</a>
								<h3>Baap ko mat sikha-Ft.Pranit </h3>
								<p className="detail">StandUp &amp; Crowd Work-Solo</p>
							</div>
						</div>
					</div>
				</div>


				<div className="sports">
					<h1 className="title">&nbsp; Sports</h1>
					<div className="movies-list" id="Sports">
						<div className="card-container">
							<div className="movie">
								<a href="html/Alan_Walker.html">
									<div className="card">
										<img src="/images/event_img/tcf-all-star/poster.avif" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>93%   25k votes</p>
										</div>
									</div>
								</a>
								<h3>Sunburn Arena-Ft.Alan Walker</h3>
								<p className="detail">Venue To be Announced</p>
							</div>
							<div className="movie">
								<a href="html/Sunburn_Goa.html">
									<div className="card">
										<img src="/images/event_img/alan-walker/poster.jpg" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>92%   16k votes</p>
										</div>
									</div>
								</a>
								<h3>Sunburn Chandigarh</h3>
								<p className="detail">Holi Festival</p>
							</div>
							<div className="movie">
								<a href="html/Probuzz_S2.html">
									<div className="card">
										<img src="/images/event_img/akash-gupta/poster.jpeg" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>94%   14k votes</p>
										</div>
									</div>
								</a>
								<h3>Probuzz Fiesta Season-2</h3>
								<p className="detail">Vrundavan Premium Lawn</p>
							</div>
							<div className="movie">
								<a href="html/Open_Mic.html">
									<div className="card">
										<img src="/images/event_img/indian-ocean/poster.jpeg" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>59%   74k votes</p>
										</div>
									</div>
								</a>
								<h3>Open Mic-StandUp</h3>
								<p className="detail">The Comedy Factory </p>
							</div>
							<div className="movie">
								<a href="html/Baap_Ko_Mat_Sikha.html">
									<div className="card">
										<img src="/images/event_img/mandli/poster.avif" className="card-img" alt="" />
										<div className="card-body">
											<ion-icon name="heart-sharp" />
											<p>87%   34k votes</p>
										</div>
									</div>
								</a>
								<h3>Baap ko mat sikha-Ft.Pranit </h3>
								<p className="detail">StandUp &amp; Crowd Work-Solo</p>
							</div>
						</div>
					</div>
				</div>


			</div>
		</>
	)
}
