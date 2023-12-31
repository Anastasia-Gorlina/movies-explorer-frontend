function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/Anastasia-Gorlina/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__link link">
            <p className="portfolio__text">Статичный сайт</p>
            <div className="portfolio__icon"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/Anastasia-Gorlina/russian-travel" target="_blank" rel="noreferrer" className="portfolio__link link">
            <p className="portfolio__text">Адаптивный сайт</p>
            <div className="portfolio__icon"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/Anastasia-Gorlina/express-mesto-gha" target="_blank" rel="noreferrer" className="portfolio__link link">
            <p className="portfolio__text">Одностраничное приложение</p>
            <div className="portfolio__icon"></div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;