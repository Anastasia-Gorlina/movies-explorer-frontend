import { useState, useEffect } from 'react';

function MoviesCard({ movie, isOpenSavedMovies, handleCardClick, isLiked }) {
console.log('moviesCard', {movie, isOpenSavedMovies})
	const [durationTitle, setDurationTitle] = useState('')

	useEffect(() => {
		const hours = Math.trunc(movie.duration / 60)
		const minutes = movie.duration % 60
		hours > 0 ? setDurationTitle(hours + 'ч. ' + minutes + ' м.') : setDurationTitle(minutes + ' м.')
	}, [movie])

	function onCardClick(e) {
		handleCardClick(e, movie)
	}

	return (
		<div className="MoviesCard">
			<a className="MoviesCard__link link" href={movie.trailerLink} target="_blank" rel="noreferrer">
				<img src={movie.image} className="MoviesCard__image" alt={`Постер фильма ${movie.nameRU}`} />
			</a>
			<button type="button" className={`button MoviesCard__button ${isLiked ? ' MoviesCard__button_saved' : ''}${isOpenSavedMovies ? ' MoviesCard__button_deleted' : ''}`}
			onClick={onCardClick}></button>
			<div className="MoviesCard__info">
				<div className="MoviesCard__desc">
					<h3 className="MoviesCard__title">{movie.nameRU}</h3>
				</div>
				<p className="MoviesCard__duration">{durationTitle}</p>
			</div>

		</div>
	);
}

export default MoviesCard;