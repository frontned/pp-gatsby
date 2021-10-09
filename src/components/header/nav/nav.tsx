import * as React from 'react'
import './nav.scss'

export const Nav = () => (
  <nav className="nav">
    <div className="logo">
      <a href="#home">
        <img className="logo__img" src="./images/Logo.svg" alt="Logo" />
      </a>
    </div>
    <img className="nav__burger js-burger" src="./images/burger_menu.svg" />
    <ul className="nav-list">
      <li className="nav-list__item">
        <a href="#about">about:</a>
      </li>
      <li className="nav-list__item">
        <a href="#work">works:</a>
      </li>
      <li className="nav-list__item">
        <a href="#contact">contact:</a>
      </li>
    </ul>
  </nav>
)
