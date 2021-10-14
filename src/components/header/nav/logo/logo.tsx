import * as React from 'react'
import * as s from './logo.module.scss'
import LogoImage from '../../../../images/Logo.svg'

export const Logo = () => (
  <div className={s.logo}>
    <a href="#home">
      <img className={s.img} src={LogoImage} alt="Logo" />
    </a>
  </div>
)
