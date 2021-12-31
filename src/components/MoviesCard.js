import React from 'react';
import '../styles/moviesCard.css';


function MoviesCard({cart, updateCart, id, title, category, likes, dislikes}) {

    const RemoveMovie = item => {
        const allMovies = [...cart];

        // supprimer element avec splice
        allMovies.splice(item, 1);
        console.log(allMovies)

        // modifier la cart
        updateCart(allMovies);

    }

    return (
        <div className="movies-card">

              <div >
                  <img className="movies_card_image" src="https://via.placeholder.com/400x250 " alt="" />
                  <h4> {title}</h4>
                  <h4 id='category'>{category}</h4>
                  
              </div>
              <div className="movie_like_dislike">
                  <span> <i class="fas fa-thumbs-up"></i>  {likes} </span>
                  <span> <i class="fas fa-thumbs-down"></i>  {dislikes}</span>
              </div>
              <div>
              <i style={{ cursor: 'pointer' }} className='fa fa-times-circle' onClick={() => RemoveMovie(id)}></i>
              </div>
              </div>
    )
              
    
}

export default MoviesCard;