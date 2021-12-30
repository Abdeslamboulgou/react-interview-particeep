import React from 'react';

function MoviesCard({movie}) {
    return (
        <div className="movies-card">
              <div>
                  <img className="movies_card_image" src="https://via.placeholder.com/400x250 " alt="" />
                  <h4>{movie.title}</h4>
                  <div className="movie_card_category"><h5>{movie.category}</h5></div>
              </div>
              <div className="movie_like_dislike">
                  <span>{movie.likes}</span>
                  <span>{movie.dislikes}</span>
              </div>
              <button type='button' className='delete_movie_card' >delete</button>
        </div>
    );
}

export default MoviesCard;