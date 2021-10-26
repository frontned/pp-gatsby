import * as React from 'react'
import {FullScreenMenuItemProps} from '.'

export const FullScreenMenuItem = ({
  href,
  text,
  onClick,
}: FullScreenMenuItemProps) => (
  <li>
    <a href={href} onClick={onClick}>
      {text}
    </a>
  </li>
)
