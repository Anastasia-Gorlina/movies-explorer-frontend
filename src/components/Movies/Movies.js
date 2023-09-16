import { useState, useEffect } from 'react';
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { findMovies, validateMovie } from '../../utils/Help';
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';

function Movies({ savedMovies, allMoviesFromServer, isGetMoviesError, isLoading, setSavedMovies }) {
  
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [keywords, setKeywords] = useState('');
  console.log('movies', movies)
  const initialMovies = JSON.parse(localStorage.getItem('initialMovies'));

  useEffect(() => {
    const keywords = localStorage.getItem('keywords');
    keywords && setKeywords(keywords);
    initialMovies && setMovies(initialMovies);
    const shortMovie = localStorage.getItem('shortMovie');
    shortMovie && setIsShortFilm(JSON.parse(shortMovie));
  }, [])

  useEffect(() => {
    setAllMovies(allMoviesFromServer)
    if ((!initialMovies || !initialMovies.length)) {
      setMovies(allMoviesFromServer)
    }
  }, [allMoviesFromServer])

  function getMovies(searchStr, isShortMovies) {
    console.log('searchStr', searchStr);
    localStorage.setItem('keywords', searchStr);
    localStorage.setItem('shortMovie', isShortMovies);
    if (allMovies.length) {
      const moviesList = findMovies(allMovies, searchStr, isShortMovies)
      setMovies(moviesList)
      localStorage.setItem('initialMovies', JSON.stringify(moviesList));
    }
  }

  function addCardToSaved(e, movie) {
    // const isLiked = movie.isLiked
    const isLiked = savedMovies.findIndex(i => i.movieId === movie.movieId) > -1
    if (isLiked) {
      const idx = savedMovies?.findIndex(i => i.movieId === movie.movieId)
      api.deleteSavedMovie(savedMovies[idx]._id)
        .then(res => {
          e.target.classList.remove('MoviesCard__button_saved')
          savedMovies.splice(idx, 1)
        })
        .catch(err => console.log(err))
    } else {
      delete movie.isLiked
      api.addSavedMovie(movie)
        .then((res) => {
          e.target.classList.add('MoviesCard__button_saved')
          setSavedMovies([...savedMovies, res.data])
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <section>
      <SearchForm onClick={getMovies} isShort={isShortFilm} isMovie/>
      {isLoading && <Preloader />}
      {isGetMoviesError && <p className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {!movies.length && !isGetMoviesError && <NotFound />}
      {!isLoading && !!movies.length && <MoviesCardList movies={movies} savedMovies={savedMovies} handleCardClick={addCardToSaved} />}
    </section>
  )
}

export default Movies;