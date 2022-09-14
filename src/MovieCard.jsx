import React from 'react';
import { MovieCardStyled } from './components/styled/ComponentStyled';

//jsx is just the same as js but with a logo?

const MovieCard = ({ movie }) => {
  return (
    <MovieCardStyled>
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/400'
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
