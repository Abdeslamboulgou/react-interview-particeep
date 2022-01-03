import React, { useState } from 'react';
import './App.css';
import MoviesCard from '../src/components/MoviesCard'
import movies from './data/movies';

function App() {
  
  const [film , updateFilm] = useState(movies)

  return (
    <div className='app'>
      <MoviesCard film={film} updateFilm={updateFilm} />
    </div>
  )

}

export default App;
