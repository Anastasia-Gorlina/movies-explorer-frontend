import React from 'react';

function NavTab () {

    return (
        <section className="NavTab">
            <ul className= 'NavTab__elements'>
                <li className='NavTab__icon'>
                    <a className="NavTab__link-list-type" href="/#about/">О проекте</a>
                </li>
                <li className='NavTab__icon'>
                    <a className="NavTab__link-list-type" href="/#techs/">Технологии</a>
                </li>
                <li className='NavTab__icon'>
                    <a className="NavTab__link-list-type" href="/#about-me/">Студент</a>
                </li>
              </ul>
        </section>
    );
}

export default NavTab;