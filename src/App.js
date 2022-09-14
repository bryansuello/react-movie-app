import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import Footer from './components/Footer';
import { AppStyled, SearchStyled } from './components/styled/ComponentStyled';

// external api to get access tp data about movies
// api key for omdb: 1723493
//1723493
//
//typo can caused u so much headache. always watch ur spelling

const API_URL = 'https://www.omdbapi.com?apikey=1723493'; //add the api key after the ?apikey=

//unused variable or whatever they re called here, cause error when not used
// const movie1 = {
//   Title: "Sex Education",
//   Year: "2019–", SearchStyled,
//   imdbID: "tt7767422",
//   Type: "series",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BOTE0MjQ1NDU3OV5BMl5BanBnXkFtZTgwNTI4MTgwNzM@._V1_SX300.jpg",
// };

const App = () => {
  //fetch the date from the api as soon as the component loads
  //use the use effect hook for that
  //import the use effect hooks: import { useEffect } from 'react'

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async title => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('sex');
  }, []);

  return (
    <>
      <AppStyled>
        <h1>BRYFLIX</h1>

        <SearchStyled>
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </SearchStyled>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map(movie => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </AppStyled>
      <Footer />
    </>
  );
};

export default App;
