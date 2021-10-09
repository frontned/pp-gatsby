import * as React from 'react'

export const FullScreenMenu = () => (
  <div className="full-screen-menu js-full-screen-menu">
    <div className="full-screen-menu__close">
      <img className="js-burger" src="./images/burger_menu_close.svg" />
    </div>
    <h2 className="full-screen-menu__title">menu</h2>
    <ul className="full-screen-menu__list">
      <li className="full-screen-menu__item">
        <a href="#home">main</a>
      </li>
      <li className="full-screen-menu__item">
        <a href="#about">about</a>
      </li>
      <li className="full-screen-menu__item">
        <a href="#work">work</a>
      </li>
      <li className="full-screen-menu__item">
        <a href="#contact">contact</a>
      </li>
    </ul>
    <ul className="social">
      <li className="social__item">
        <a target="_blank" href="https://www.instagram.com/paulie.darko/">
          <img src="./images/icon_instagram.svg" />
        </a>
      </li>
      <li className="social__item">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/paulius-slavinskis-0b4b0311b/"
        >
          <img src="./images/linkedin.svg" />
        </a>
      </li>
      <li className="social__item">
        <a target="_blank" href="https://dribbble.com/zlastis">
          <img src="./images/icon_dribbble.svg" />
        </a>
      </li>
    </ul>
  </div>
)
