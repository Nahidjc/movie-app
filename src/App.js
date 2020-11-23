import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  }, []);

  return (

    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies}></MovieList>
      </div>

    </div>
  );
}

export default App;
