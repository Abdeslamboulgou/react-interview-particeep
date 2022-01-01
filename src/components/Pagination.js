import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import movies from '../data/movies';
import Categories from './Categories'
import '../styles/pagination.css'
import '../styles/moviesCard.css'
import LikesDislikes from './LikesDislikes';

function Pagination({ RemoveMovie }) {

    const [activeCategory, AfficheMovies] = useState('');
    const categories = movies.reduce((acc, movie) => acc.includes(movie.category) ? acc : acc.concat(movie.category), [])

    const [films, setFilms] = useState(movies);
    const [pageNumber, setPageNumber] = useState(0);

    const moviesPerPage = 4;
    const pagesVisited = pageNumber * moviesPerPage;

    const displayMovies = films.slice(pagesVisited, pagesVisited + moviesPerPage)

    const pageCount = Math.ceil(films.length / moviesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="App">
            <Categories
                categories={categories}
                activeCategory={activeCategory}
                AfficheMovies={AfficheMovies}
            />
            <div className='movies-list'>
                {films.length > 0 ? (
                    displayMovies.map((movie) => !activeCategory || activeCategory === movie.category ? (

                        <div className="movies-card" key={movie.id}  >

                            <div >
                                <img className="movies_card_image" src="https://via.placeholder.com/400x250 " alt="" />
                                <h4> {movie.title}</h4>
                                <h4 id='category'>{movie.category}</h4>

                            </div>
                            <LikesDislikes movie={movie} />
                            <div >
                                <i style={{ cursor: 'pointer' }} className='fa fa-times-circle' onClick={() => RemoveMovie(movie.id)}></i>
                            </div>
                        </div>) : null

                    )) : (<div className='cart-vide'>Cart vide</div>)}

                <ReactPaginate
                    previousLabel={"Précédent"}
                    nextLabel={"Suivant.."}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
    );

}

export default Pagination;