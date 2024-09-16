import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/MovieInfo.css';

const MovieInfo = () => {
    const { movieId } = useParams();  // Get the movie ID from the URL
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/movies/${movieId}/`);
                setMovie(response.data);
            } catch (error) {
                console.error("Failed to fetch movie", error);
            }
        };

        const fetchCast = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/movies/${movieId}/cast/`);
                setCast(response.data);
            } catch (error) {
                console.error("Failed to fetch cast", error);
            }        
        };

        const fetchCrew = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/movies/${movieId}/crew/`);
                setCrew(response.data);
            } catch (error) {
                console.error("Failed to fetch crew", error);
            }
        };
    
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/movies/');
                setAllMovies(response.data);
            } catch (error) {
                console.error("Failed to fetch movies", error);
            }
        };

        fetchMovie();
        fetchCast();
        fetchCrew();
        fetchMovies();
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    // Filter out the current movie and limit to 5 movies
    const recommendedMovies = allMovies
        .filter(movies => movies.movie_id !== parseInt(movieId)) // Exclude the current movie
        .slice(0, 4); // Limit to 4 movies

    return (
        <div id="movieinfo">
            <div className="row banner" id="header" style={{
                backgroundImage: `linear-gradient(
          90deg,
          rgb(26, 26, 26) 24.97%,
          rgb(26, 26, 26) 38.3%,
          rgba(26, 26, 26, 0.04) 97.47%,
          rgb(26, 26, 26) 100%
        ),
        url(${movie.banner_path})`
            }}>
                <div className="col-sm-4 ">
                    <div className="col1">
                        <img src={movie.poster_path} className="Movie_Img" alt="Movie Poster" />
                    </div>
                </div>
                <div className="col2_body">
                    <div className="col-sm-4 pad">
                        <h1 className="movie_title">{movie.movie_name}</h1>
                        <br />
                        <div className="type">
                            <button className="btn">{movie.dimensions}</button>&nbsp;&nbsp;
                            <button className="btn">{movie.genres}</button>
                        </div>
                        <br />
                        <div className="categories">{movie.duration} &nbsp;•&nbsp; {movie.release_date}</div>
                        <br />
                        <div>
                            <a href="#" className="booking_button">
                                <button className="bth text-white Book_Now">Book Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-*" id="col3"></div>
            </div>
            <div className="content_body row">
                <div className="col-sm-9">
                    <h1 className="title">About the Movie</h1>
                    <p className="description">
                        {movie.description}
                    </p>
                    <hr className="horizontal_line" />
                    <h1 className="title">Cast</h1>
                    <div>
                        {cast.map(cast_member => (
                            <figure className="cast_fig" key={cast_member.actor_name}>
                                <img className="cast" src={cast_member.image_path} alt={cast_member.actor_name} />
                                <figcaption className="img_caption">{cast_member.actor_name}</figcaption>
                            </figure>
                        ))}
                    </div>
                    <hr className="horizontal_line" />
                    <h1 className="title">Crew</h1>
                    <div>
                        {crew.map(crew_member => (
                            <figure className="cast_fig" key={crew_member.crew_name}>
                                <img className="cast" src={crew_member.image_path} alt={crew_member.crew_name} />
                                <figcaption className="img_caption">{crew_member.crew_name}</figcaption>
                            </figure>
                        ))}
                    </div>
                    <hr className="horizontal_line" />
                    <div>
                        <h1 className="title">You might also like</h1>
                        <div className="recommended-movies">
                            {recommendedMovies.map(movies => (
                                <figure className="movie_fig1" key={movies.id}>
                                    <Link to={`/movie/${movies.movie_id}`}>
                                        <img className="Movie_Img" src={movies.poster_path} alt={movies.movie_name} />
                                    </Link>
                                    <figcaption className="movie_caption">{movies.movie_name}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                    <hr className="horizontal_line" />
                </div>
                <div className="col-sm-*"></div>
            </div>
            <br /><br />
        </div>
    );
};

export default MovieInfo;
