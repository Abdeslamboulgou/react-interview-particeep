import React,{useState} from 'react';
import Pagination from './Pagination';
import movies from '../data/movies';


function MoviesCard() {

  const [films , updateFilms] = useState(movies)


  const RemoveMovie = item => {

    // supprimer element avec filter
    if (window.confirm('vous voulez supprimer ce film ?')) {
      const newMovies = films.filter((movie) => movie.id !== item);
      console.log(newMovies);
      updateFilms(newMovies);

    }
  }
  return (
    <Pagination  RemoveMovie={RemoveMovie} films={films} updateFilms={updateFilms}/>
  )
}

export default MoviesCard;