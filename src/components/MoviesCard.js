import React from 'react';
import Pagination from './Pagination';


function MoviesCard({ films, updateFilms }) {

  const RemoveMovie = item => {

    // supprimer element avec filter
    if (window.confirm('vous voulez supprimer ce film ?')) {
      const newMovies = films.filter((movie) => movie.id !== item);

      // ici pour verifier si le film est supprimer
      console.log(newMovies)

      // modifier la cart
      updateFilms(newMovies);

    }

  }

  return (
    <Pagination  RemoveMovie={RemoveMovie}/>
  )

}

export default MoviesCard;