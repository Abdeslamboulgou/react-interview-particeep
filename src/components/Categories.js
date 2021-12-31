import React from 'react';
import '../styles/categories.css'

function Categories({categories , activeCategory , AfficheMovies}) {
    return (
        <div className='categories'>
            <select className='categories-select' value={activeCategory} onChange={(e) => AfficheMovies(e.target.value)}>
                <option value="" selected="selected">  </option>
                {categories.map((categor, index) => (
                    <option key={`${categor}-${index}`} value={categor}>{categor}</option>
                ))}
            </select>
        </div>
    );
}

export default Categories;