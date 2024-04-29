import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  const [movies, setMovies] = useState<object[]>();
  const [page, setPage] = useState<number>(1);
  const [movieId, setMovieId] = useState<string>('');

  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=4&type=movie`, {
      headers: {
        'X-API-KEY': '3F814CZ-2QQM8PT-KRQK5JH-5F65FFJ'
      }
    })
      .then(res => res.json())
      .then(res => res?.docs)
      .then(res => {
        if (res?.length){
          setMovies(res)
        }
      })
  }, [movies, page])

  return (
    <div className="App">
      <Header />
      <HomePage movies={movies} page={page} onPage={setPage} onMovie={setMovieId}/>
    </div>
  );
}

export default App;
