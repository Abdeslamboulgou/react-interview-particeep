import React from 'react';
import Pagination from './Pagination';


function MoviesCard({ films, updateFilms }) {

  const RemoveMovie = item => {

    // supprimer element avec filter
    if (window.confirm('vous voulez supprimer ce film ?')) {
      const newMovies = films.filter((movie) => movie.id !== item);
      updateFilms(newMovies);

    }
  }
  return (
    <Pagination  RemoveMovie={RemoveMovie}/>
  )
}

export default MoviesCard;