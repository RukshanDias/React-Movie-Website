import './App.css';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = `${process.env.REACT_APP_API_URL}`;;
  const API_SEARCH = `${process.env.REACT_APP_API_SEARCH}`;
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
    document.title = "Movie Website"
  }, []);

  console.log(movies)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("printing searched data" + API_SEARCH + term)
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
        {movies.length === 0
          ? <h1>No results</h1>
          : movies.map((movie, i) => (
            <MovieCard  {...movie} key={i} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
