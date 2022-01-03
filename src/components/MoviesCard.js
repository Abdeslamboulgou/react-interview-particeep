import React from 'react';
import Pagination from './Pagination';


function MoviesCard({film,updateFilm}) {

  const RemoveMovie = item => {

    // supprimer element avec filter
    if (window.confirm('vous voulez supprimer ce film ?')) {
      const newMovies = film.filter((movie) => movie.id !== item);
      console.log(newMovies);
      updateFilm(newMovies);

    }
  }
  return (
    <Pagination  RemoveMovie={RemoveMovie}/>
  )
}

export default MoviesCard;