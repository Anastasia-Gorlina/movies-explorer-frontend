import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList({isOpenSavedMovies}) {
  const movie = {
    _id: "63278682e04a4e4c1df02b5a",
    country: "hfg",
    director: "Бэнкси",
    duration: 1.17,
    year: "2010",
    description: "dcd",
    image: "https://bangbangeducation.ru/share/default.jpg",
    trailerLink: "https://www.youtube.com/watch?v=iLafkzWDIr8",
    thumbnail: "https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg",
    owner: "6327834990ff29d706bc9c02",
    movieId: 3,
    nameRU: "33 слова о дизайне",
    nameEN: "33 words about design",
  }
  const movieSaved = {
    _id: "63278682e04a4e4c1df02b5a",
    country: "hfg",
    director: "Бенкси",
    duration: 1.17,
    year: "2010",
    description: "cc",
    image: "https://bangbangeducation.ru/share/default.jpg",
    trailerLink: "https://www.youtube.com/watch?v=iLafkzWDIr8",
    thumbnail: "https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg",
    owner: "6327834990ff29d706bc9c02",
    movieId: 3,
    nameRU: "33 слова о дизайне",
    nameEN: "33 words about design",
    isSaved: true
  }
  const movies = [movie, movie, movieSaved, movie, movie, movieSaved, movie, movieSaved, movie, movie, movie, movie,]

  return (
    <div className="MoviesCardList">
      <ul className="MoviesCardList__catalog">
        {movies
          .map((item, idx) => (
            <li className="MoviesCardList__catalog_item" key={idx}>
              <MoviesCard movie={item} isOpenSavedMovies={isOpenSavedMovies}/>
            </li>
          ))
        }
      </ul>
      <button type="button" className="button MoviesCardList__more-button">Еще</button>
    </div>
  );
}

export default MoviesCardList;