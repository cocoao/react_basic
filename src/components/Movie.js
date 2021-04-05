import React from 'react';
import PropTypes from 'prop-types';

function Movie({title,year,rating}){
  return (
  <div>
    <h2>{title}</h2>
    <h4>{year}</h4>
    <em>{rating}</em>
  </div>
  );
}

Movie.propType = {
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  rating : PropTypes.number.isRequired,
};
export default Movie;