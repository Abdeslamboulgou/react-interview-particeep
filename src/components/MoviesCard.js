import React from 'react';
import '../styles/moviesCard.css';

function MoviesCard({movie}) {
    return (
        <div className="movies-card">
              <div >
                  <img className="movies_card_image" src="https://via.placeholder.com/400x250 " alt="" />
                <div className='title_category'>
                  <h4>title : {movie.title}</h4>
                  <h4 id='category'>Category : {movie.category}</h4>
                  </div>
              </div>
              <div className="movie_like_dislike">
                  <span> <i class="fas fa-thumbs-up"></i>  {movie.likes} </span>
                  <span> <i class="fas fa-thumbs-down"></i>  {movie.dislikes}</span>
              
              <button type='button' className='delete_movie_card' >delete</button>
              </div>
        </div>
    );
}

export default MoviesCard;