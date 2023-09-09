function MoviesCard({ movie, isOpenSavedMovies }) {

	return (
		<div className="MoviesCard">
			<a className="MoviesCard__link link" href={movie.trailerLink} target="_blank" rel="noreferrer">
				<img src={movie.image} className="MoviesCard__image" alt={`Постер фильма ${movie.nameRu}`} />
			</a>
			<div className="MoviesCard__info">
				<div className="MoviesCard__des">
					<h3 className="MoviesCard__title">{movie.nameRU}</h3>
					
				</div>
				<p className="MoviesCard__duration">{movie.duration}</p>
			</div>

		</div>
	);
}

export default MoviesCard;