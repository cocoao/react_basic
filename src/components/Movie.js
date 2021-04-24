import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { Link } from 'react-router-dom';

function Movie({title,year,summary, poster, genres}){
  return (
  <div className="movie">
    <Link to={{pathname:'/move_detail', state:{year, title, summary, poster, genres}}}>
      <img src={poster} alt={title} onError={(e)=>{e.target.onerror = null; e.target.src="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"}}></img>
      <div className="movie_data">
        <div className="movie_titYear clear">
          <h2 className="movie_title">{title}</h2>
          <h4 className="movie_year">{year}</h4>
        </div>
        <ul>
          {genres.map((genre, idx) => {
            return<li key={idx}>{genre}</li>;
          })}
        </ul>
        <p className="movie_summary">{summary.slice(0,400) + '...'}</p>
      </div>
    </Link>
  </div>
  );
}

Movie.propType = {
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;