import * as React from 'react'
import {FullScreenMenuItemProps} from '.'

export const FullScreenMenuItem = ({
  href,
  text,
  onClick,
}: FullScreenMenuItemProps) => (
  <li>
    <a
      href={href}
      onClick={event => {
        event.preventDefault()

        document
          .getElementById(href.replace('#', ''))
          .scrollIntoView({behavior: 'smooth'})

        onClick()
      }}
    >
      {text}
    </a>
  </li>
)
