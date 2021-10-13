import * as React from 'react'
import {Nav} from './nav'
import {Home} from './home'
import * as s from './header.module.scss'

export const Header = () => (
  <header className={s.header} id="home">
    <Nav />
    <Home />
  </header>
)
