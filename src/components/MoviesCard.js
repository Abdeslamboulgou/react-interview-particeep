import React, { useState, useEffect } from 'react';
import movies from '../data/movies';
import Pagination from './Pagination';


function MoviesCard() {

  const [toggleLike, setToggleLike] = useState(false);
  const [toggleDisLike, setToggleDisLike] = useState(false);
  const [likes, setLikes] = useState(movies.likes);
  const [dislikes, setDislikes] = useState(movies.dislikes);
  const [counter, setCounter] = useState(0);

  //cette methode c'est pour incrementer likes et dislikes
  const toggleLikeHandler = () => {
    if (counter === 1) {
      setLikes((like) => like + 1);
      setDislikes((dislike) => dislike - 1);
    } else {
      setLikes((like) => like + 1);
    }
    setCounter(1);
    setToggleLike(!toggleLike);
    setToggleDisLike(false);
  };

  //cette  methode c'est pour incrementer dislike si counter egale 1 c-a-d le bouton est déjà cliquer else
  const toggleDislikeHandler = () => {
    if (counter === 1) {
      setDislikes((dislike) => dislike + 1);
      setLikes((like) => like - 1);
    } else {
      setDislikes((dislike) => dislike + 1);
    }
    setCounter(1);
    setToggleDisLike(!toggleDisLike);
    setToggleLike(false);
  };

  useEffect(() => { }, [toggleLike, toggleDisLike, counter]);

  const savedFilm = localStorage.getItem('films')
  const [films, updateCart] = useState(savedFilm ? JSON.parse(savedFilm) : [])
  //pour la lecture de l'article localStorage (  localStorage.getItem()  )
  useEffect(() => {
    // sauvegarder la cart à chaque modification 
    localStorage.setItem('films', JSON.stringify(films))
  }, [films])
  const RemoveMovie = item => {

    // supprimer element avec filter
    if (window.confirm('vous voulez supprimer ce film ?')) {
      const newMovies = films.filter((movie) => movie.id !== item);

      // ici pour verifier si le film est supprimer
      console.log(newMovies)
      
      // modifier la cart
      updateCart(newMovies);
    
    }

  }

  return (
    <Pagination
      toggleDislikeHandler={toggleDislikeHandler}
      toggleLikeHandler={toggleLikeHandler}
      RemoveMovie={RemoveMovie}
      likes={likes}
      setLikes={setLikes}
      dislikes={dislikes}
      setDislikes={setDislikes}
    />
  )



}

export default MoviesCard;