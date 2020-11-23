import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBow from './components/SearchBow';
import AddFavourities from './components/AddFavourities';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (

    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies'></MovieListHeading>
        <SearchBow searchValue={searchValue} setSearchValue={setSearchValue}></SearchBow>
      </div>
      <div className="row">
        <MovieList movies={movies} favouriteComponent={AddFavourities}></MovieList>
      </div>

    </div>
  );
}

export default App;
