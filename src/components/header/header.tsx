import * as React from 'react'
import {Nav} from './nav'
import './header.scss'

export const Header = () => (
  <header className="header" id="home">
    <Nav />
    <section className="home">
      <div className="left">
        <div className="name">Paulius Slavinskis</div>
        <div className="title">
          <div className="title title--one">Graphic</div>
          <div className="title title--two">Designer</div>
          <div className="title title--three">Illustrator</div>
        </div>
        <div className="container">
          <div className="arrow js-arrow">
            <div className="arrow__inner"></div>
            <div className="arrow__pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.993"
                height="55.88"
                viewBox="0 0 20.993 55.88"
              >
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M960,834v55"
                  transform="translate(-949.178 -834)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M952,931l10.968,10.516,9.3-10.516"
                  transform="translate(-951.654 -886.357)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1"
                />
              </svg>
            </div>
            <img src="./images/circle.svg" />
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="photo"
          src="./images/hero_image.png"
          alt="A photo of Paulius Slavinskis"
        />
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
    </section>
  </header>
)
