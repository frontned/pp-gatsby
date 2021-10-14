import * as React from 'react'
import * as s from './nav-item.module.scss'
import {NavItemProps} from '.'

export const NavItem = ({href, text}: NavItemProps) => (
  <li className={s.item}>
    <a href={href}>{text}</a>
  </li>
)
