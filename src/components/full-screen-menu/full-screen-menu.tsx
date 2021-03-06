import * as React from 'react'
import {Social} from '../common/social'
import * as s from './full-screen-menu.module.scss'
import {FullScreenMenuItem} from './full-screen-menu-item'
import BurgerMenuClose from '../../images/burger_menu_close.svg'
import {FullScreenMenuProps} from '.'

const items = [
  {
    href: '#home',
    text: 'main',
  },
  {
    href: '#about',
    text: 'about',
  },
  {
    href: '#work',
    text: 'work',
  },
  {
    href: '#contact',
    text: 'contact',
  },
]

export const FullScreenMenu = ({onClose}: FullScreenMenuProps) => (
  <div className={s.fullScreenMenu}>
    <div className={s.close}>
      <img src={BurgerMenuClose} onClick={onClose} alt="Close Icon" />
    </div>
    <h2 className={s.title}>menu</h2>
    <ul className={s.list}>
      {items.map(({href, text}) => (
        <FullScreenMenuItem
          key={href}
          href={href}
          text={text}
          onClick={onClose}
        />
      ))}
    </ul>
    <Social className={s.social} itemClassName={s.item} />
  </div>
)
