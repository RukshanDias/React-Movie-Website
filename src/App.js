import './App.css';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=ae379cb0563dd1623d39e23df8e5d2e5";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=ae379cb0563dd1623d39e23df8e5d2e5&query="
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, []);

  console.log(movies)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("printing searched data" + API_SEARCH+term)
    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
    console.log(movies)
  }

  return (
    <div className="App">
      <div className='search_nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div className='searchBox'>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className='movies'>
        {movies.map((movie, i) => (
          <MovieCard  {...movie} key={i}/>
        ))}
      </div>
    </div>
  );
}

export default App;
