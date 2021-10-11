import * as React from 'react'

export const Social = () => (
  <div className="social">
    <div className="social__title">Or stalk me on these</div>
    <ul className="social__list">
      <li className="social__list-item">
        <a target="_blank" href="https://www.instagram.com/paulie.darko/">
          <img src="./images/insta-orange.svg" />
        </a>
      </li>
      <li className="social__list-item">
        <a target="_blank" href="https://dribbble.com/zlastis">
          <img src="./images/dribble-orange.svg" />
        </a>
      </li>
      <li className="social__list-item">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/paulius-slavinskis-0b4b0311b/"
        >
          <img src="./images/linkedin-orange.svg" />
        </a>
      </li>
    </ul>
  </div>
)
