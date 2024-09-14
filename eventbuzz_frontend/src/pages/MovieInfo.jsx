import React from 'react';
import '../styles/MovieInfo.css'

const MovieInfo = () => {
  return (
    <div id="movieinfo">
      <div className="row   banner" id="header" style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgb(26, 26, 26) 24.97%,
          rgb(26, 26, 26) 38.3%,
          rgba(26, 26, 26, 0.04) 97.47%,
          rgb(26, 26, 26) 100%
        ),
        url(/images/movie_img/kill/banner.avif)`
      }}>
        <div className="col-sm-4 ">
          <div className="col1">
            <img src="/images/movie_img/kill/poster.avif" className="Movie_Img" alt="Movie Poster" />
          </div>
        </div>
        <div className="col2_body">
          <div className="col-sm-4 pad">
            <h1 className="movie_title">KILL</h1>
            <div className='add_rating'>
              <span className="ratings ">
                <i class="fa-solid fa-star fa-xs" style={{ color: '#f84464' }}></i>
                &nbsp; 4.7/5
              </span>
              <a href="" className="add_rating_button">
                <button type="button" className="btn rating_button">
                  Rate Now
                </button>
              </a>
            </div>

            <br />
            <div className="type">
              <button className="btn">2D</button>&nbsp;&nbsp;
              <button className="btn">Hindi, Tamil, Kannada</button>
            </div>
            <br />
            <div className="categories">2h 40m &nbsp;•&nbsp; Drama &nbsp;•&nbsp; U &nbsp;•&nbsp; 27 Oct, 2023</div>
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
            Based on Anurag Pathak's bestselling novel of the same name, 12th Fail
            depicts the true story of an IPS officer Manoj Kumar Sharma hailing
            from a small town in Chambal, who fearlessly embraced the idea of
            restarting his academic journey and reclaiming his destiny at a place
            where millions of students attempt for the world's toughest
            competitive exam, UPSC.<br /><br />
            The film is not just a chronicle of one man's journey but a
            celebration of everyone who dared to look at failures as an
            opportunity to #Restart.
          </p>
          <hr className="horizontal_line" />
          <h1 className="title">Cast</h1>
          <div>
            {/* Repeat this structure for each cast member */}
            <figure className="cast_fig">
              <img className="cast" src="images/movie_img/stree2/actors/shraddha-kapoor.avif" alt="Vikrant Massey" />
              <figcaption className="img_caption">Vikrant Massey</figcaption>
            </figure>
            {/* ... other cast members ... */}
          </div>
          <hr className="horizontal_line" />
          <h1 className="title">Crew</h1>
          <div>
            {/* Repeat this structure for each crew member */}
            <figure className="cast_fig">
              <img className="cast" src="images/movie_img/stree2/actors/shraddha-kapoor.avif" alt="Vidhu V. Chopra" />
              <figcaption className="img_caption">Vidhu V. Chopra</figcaption>
            </figure>
            {/* ... other crew members ... */}
          </div>
          <hr className="horizontal_line" />
          <div>
            <h1 className="title">You might also like</h1>
            {/* Repeat this structure for each recommended movie */}
            <figure className="movie_fig1">
              <a href="../html/Kaagaz_2.html">
                <img className="Movie_Img" src="images/movie_img/stree2/actors/shraddha-kapoor.avif" alt="Kagaaz 2" />
              </a>
              <figcaption className="movie_caption">Kagaaz 2</figcaption>
            </figure>
            {/* ... other recommended movies ... */}
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