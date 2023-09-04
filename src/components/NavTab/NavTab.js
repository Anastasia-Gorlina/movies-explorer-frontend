import React from 'react';

function NavTab () {

    return (
        <section className="NavTab">
            <ul className= 'NavTab__elements'>
                <li className='NavTab__icon'>
                    <a className="NavTab__link" href="/#about/">О проекте</a>
                </li>
                <li className='NavTab__icon'>
                    <a className="NavTab__link" href="/#techs/">Технологии</a>
                </li>
                <li className='NavTab__icon'>
                    <a className="NavTab__link" href="/#about-me/">Студент</a>
                </li>
              </ul>
        </section>
    );
}

export default NavTab;