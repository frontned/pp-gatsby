import * as React from 'react'
import {Logo} from './logo'
import {NavItem} from './nav-item'
import * as s from './nav.module.scss'

const navItems = [
  {
    href: '#about',
    text: 'about:',
  },
  {
    href: '#work',
    text: 'works:',
  },
  {
    href: '#contact',
    text: 'contact:',
  },
]

export const Nav = () => (
  <nav className={s.nav}>
    <Logo />
    <img className={s.burger} src="./images/burger_menu.svg" />
    {/* js-burger */}
    <ul className={s.list}>
      {navItems.map(({href, text}) => (
        <NavItem key={href} href={href} text={text} />
      ))}
    </ul>
  </nav>
)
