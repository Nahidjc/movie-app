import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBow from './components/SearchBow';
import AddFavourities from './components/AddFavourities';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favouites, setFavourites] = useState([]);

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
  const AddFavouriteMovie = movie => {
    const newFavouriteList = [...favouites, movie];
    setFavourites(newFavouriteList);
  }
  const removeFavouriteMovie = movie => {
    const newFavouriteList = favouites.filter(
      (favouite) => favouite.imdbID !== movie.imdbID
    )
    setFavourites(newFavouriteList);
  }
  return (

    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies'></MovieListHeading>
        <SearchBow searchValue={searchValue} setSearchValue={setSearchValue}></SearchBow>
      </div>
      <div className="row">
        <MovieList movies={movies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent={AddFavourities}></MovieList>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Favourites'></MovieListHeading>
      </div>
      <div className="row">
        <MovieList movies={favouites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}></MovieList>
      </div>
    </div>
  );
}

export default App;
