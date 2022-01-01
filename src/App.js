import React, { useEffect, useState } from 'react';
import './App.css';
import MoviesCard from '../src/components/MoviesCard'

function App() {

  const savedFilm = localStorage.getItem('films')
  const [films, updateFilms] = useState(savedFilm ? JSON.parse(savedFilm) : [])
  //pour la lecture de l'article localStorage (  localStorage.getItem()  )
  useEffect(() => {
    // sauvegarder la cart à chaque modification 
    localStorage.setItem('films', JSON.stringify(films))
  }, [films])
  return (
    <div className='app'>
      <MoviesCard films={films} updateFilms={updateFilms} />
    </div>
  )

}

export default App;
