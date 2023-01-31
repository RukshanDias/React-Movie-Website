import './App.css';
import MovieCard from './components/MovieCard';
import GenreSelect from './components/GenreSelect';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = `${process.env.REACT_APP_API_URL}`
  const API_SEARCH = `${process.env.REACT_APP_API_SEARCH}`
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('')
  const [genre, setGenre] = useState('Select')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .then(() => setLoading(false))
    document.title = "Movie Website"
  }, []);

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("printing searched data" + API_SEARCH + term)
    setLoading(true)
    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .then(() => setLoading(false))
    console.log(movies)
  }

  return (
    <div className="App">
      <div className='search_nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>
        <GenreSelect movieGenre={genre} changeGenre={setGenre} changeMovies={setMovies} changeLoading={setLoading}/>
        <div className='searchBox'>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className='movies'>
        {loading ? <h1>loading..</h1>
          : movies.length === 0
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
