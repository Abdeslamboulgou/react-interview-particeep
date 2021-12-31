import React , {useState , useEffect} from 'react';
import movies from '../components/movies'
import MoviesCard from '../components/MoviesCard';
import '../styles/home.css'
import Categories from '../components/Categories';
function Home() {

    const savedCart = localStorage.getItem('movie')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    //pour la lecture de l'article localStorage (  localStorage.getItem()  )
    useEffect(() => {
      // sauvegarder la cart à chaque modification 
      localStorage.setItem('movie', JSON.stringify(cart))
    }, [cart])

    const [activeCategory, AfficheMovies] = useState('');
    const categories = movies.reduce((acc, movie) => acc.includes(movie.category) ? acc : acc.concat(movie.category), [])

    return (
        <div>
            <Categories
                categories={categories}
                AfficheMovies={AfficheMovies}
                activeCategory={activeCategory}
            />
            <div className="movies">
              <ul className='movies-list'>
                {movies.map(({ id, title, category, likes, dislikes}) => !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <MoviesCard
                            id={id}
                            title={title}
                            category={category}
                            likes={likes}
                            dislikes={dislikes}
                            cart={cart}
                            updateCart={updateCart}
                        />
                    </div>
                ) : null
                )}
            </ul>
            </div>
        </div>

    );
}

export default Home;