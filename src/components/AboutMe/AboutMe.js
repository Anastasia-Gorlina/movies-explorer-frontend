function AboutMe() {
  return (
    <section className="AboutMe" id="aboutMe">
      <h2 className="AboutMe__header">Студент</h2>
      <div className="AboutMe__info">
        <div className="AboutMe__text">
          <h2 className="AboutMe__name">Анастасия</h2>
          <p className="AboutMe__about">Фронтенд-разработчик, 24 года</p>
          <p className="AboutMe__desc">
          Я живу в Санкт-Петербурге, закончила бакалавриат СПБГУТ по напрвилению Инфокоммуникационные технологии и системы связи и магистратуру Итмо по направлению Информационная безопасность. 
          Занимаюсь танцами и люблю читать романы.
          </p>
          <div className="AboutMe__links">
            <a href="https://github.com/Anastasia-Gorlina" target="_blank" rel="noreferrer" className="AboutMe__link link">Github</a>
            <a href="https://t.me/n_mikel" target="_blank" rel="noreferrer" className="AboutMe__link link">Telegram</a>
          </div>
        </div>
        <div className="AboutMe__image"></div>
      </div>
    </section>
  )
}

export default AboutMe;