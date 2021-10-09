import * as React from 'react'

export const Footer = () => (
  <footer className="footer" id="contact">
    <div className="left">
      <div className="section-title">
        <div className="section-title__text">
          <div>Let's make a</div>
          <h2>Contact</h2>
        </div>
      </div>

      <div className="contact">
        <div className="contact__item">
          <div className="contact__item-title">phone</div>
          <div className="contact__item-description">370 6 35 94960</div>
        </div>
        <div className="contact__item">
          <div className="contact__item-title">email</div>
          <div className="contact__item-description">
            paulius.slavinskis@gmail.com
          </div>
        </div>
      </div>

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
    </div>
    <div className="right"></div>
  </footer>
)
