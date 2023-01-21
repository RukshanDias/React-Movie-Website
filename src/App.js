import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=ae379cb0563dd1623d39e23df8e5d2e5";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }, []);

  console.log(movies)

  return (
    <div className="App">
      <div className='search_nav'>
        <div>
          <h1>Movies</h1>
        </div>

        <div>
          <form>
            <input/>
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className='movies'>
        
      </div>
    </div>
  );
}

export default App;
