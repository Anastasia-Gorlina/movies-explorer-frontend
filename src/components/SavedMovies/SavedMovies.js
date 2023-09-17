import { useState, useEffect } from 'react';
import { findMovies } from '../../utils/Help'
import api from '../../utils/MainApi'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NotFound from '../NotFound/NotFound';

function SavedMovies({ savedMovies, isGetMoviesError, isLoading }) {

  const [searchStrSavedMovies, setSearchStrSavedMovies] = useState('')
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(savedMovies)
  }, [])
  
  function getMovies(searchStr, isShortMovies) {
    const moviesList = findMovies(savedMovies, searchStr, isShortMovies)
    setMovies([...moviesList])
  }

  function deleteCard(e, movie) {
    api.deleteSavedMovie(movie._id)
      .then(res => {
        const idx = savedMovies.findIndex(i => i.movieId === movie.movieId)
        savedMovies.splice(idx, 1)
        
        getMovies(searchStrSavedMovies, localStorage.getItem('needShortFilmFilter'))
      })
      .catch(err => console.log(err))
  }

  return (
    <section>
      <SearchForm onClick={getMovies} setSearchStrSavedMovies={setSearchStrSavedMovies} initialSearchStr="" isShort={false} />
      {!isLoading && !!savedMovies.length &&<MoviesCardList isOpenSavedMovies="true" movies={movies} handleCardClick={deleteCard} />}
      {(!savedMovies.length || !movies.length )&& !isGetMoviesError && <NotFound />}
    </section>
  )
}

export default SavedMovies;