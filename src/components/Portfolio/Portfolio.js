import React from 'react';
import MainStack from '../MainStack/MainStack';
import link from '../../images/link.jpg';

function Portfolio () {
    const text = {
        name: 'Анастасия',
        profession: 'Фронтенд-разработчик, 24 года',
        about: 'Я живу в Санкт-Петербурге, закончила бакалавриат СПБГУТ по напрвилению Инфокоммуникационные технологии и системы связи и магистратуру Итмо по направлению Информационная безопасность. Занимаюсь танцами и люблю читать романы.',
        link1: '',
        link2: 'https://github.com/Anastasia-Gorlina',
        titleItem: 'Портфолио',
        item1: 'Статичный сайт',
        linkStatic: '',
        linkStatic: 'https://github.com/Anastasia-Gorlina/how-to-learn',
        item2: 'Адаптивный сайт',
        linkAdaptive: 'anastasia-gorlina.github.io/russian-travel/',
        linkAdaptive: 'https://github.com/Anastasia-Gorlina/russian-travel',
        item3: 'Одностраничное приложение',
        linkSinglePageApp: 'https://github.com/Anastasia-Gorlina/react-mesto-api-full-gha'
    }

    return (
        <div>
            <MainStack stackName = {'Студент'} id ='Студент'>
            <section className="portfolio">
                    <div className="portfolio__space">
                        <div className="portfolio__info">
                            <h1 className="portfolio__title">{text.name}</h1>
                            <p className="portfolio__subtitle">{text.profession}</p>
                            <p className="portfolio__about">{text.about}</p>
                            <div className="portfolio__description">
                                <a
                                    className="portfolio__link" 
                                    href="https://github.com/Anastasia-Gorlina"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    {text.link1}
                                    Facebook
                                </a>
                                <a
                                    className="portfolio__link"
                                    href={text.link2}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                            </div>
                            <p className="portfolio__title-item">{text.titleItem}</p>
                            <div className="portfolio__item">
                                <a className="portfolio__item-web">{text.item1}</a>
                                <a 
                                    href = {text.linkStatic}
                                    target="_blank" rel="noopener noreferrer"
                                    className="portfolio__item-web"
                                >
                                    ↗
                                </a>
                            </div>
                            <div className="portfolio__item">
                                <a className="portfolio__item-web">{text.item2}</a>
                                <a 
                                    href = {text.linkAdaptive}
                                    target="_blank" rel="noopener noreferrer"
                                    className="portfolio__item-web"
                                >
                                    ↗
                                </a>
                            </div>
                            <div className="portfolio__item">
                                <a className="portfolio__item-web">{text.item3}</a>
                                <a 
                                    href = {text.linkSinglePageApp}
                                    target="_blank" rel="noopener noreferrer"
                                    className="portfolio__item-web"
                                >
                                    ↗
                                </a>
                            </div>
                            <div className = "portfolio__holder">
                            <div className = "portfolio__round">
                            <img 
                                    className="portfolio__avatar"
                                    src={link}
                                    alt="Аватар пользователя"
                                />
                            </div> 
                        </div>
                        </div>

                    </div>
                </section>
            </MainStack>
        </div>
    );
}

export default Portfolio;                        