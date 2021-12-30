import React from 'react';
import movies from '../components/movies'
import MoviesCard from '../components/MoviesCard';

function Home() {
    return (

        <div className="movies">
            {movies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
            )
            )}
        </div>

    );
}

export default Home;