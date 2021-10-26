import * as React from 'react'
import * as s from './nav-item.module.scss'
import {NavItemProps} from '.'

export const NavItem = ({href, text}: NavItemProps) => {
  const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = event => {
    event.preventDefault()

    document
      .getElementById(href.replace('#', ''))
      .scrollIntoView({behavior: 'smooth'})
  }

  return (
    <li className={s.item}>
      <a href={href} onClick={handleLinkClick}>
        {text}
      </a>
    </li>
  )
}
