import * as React from 'react'
import {FullScreenMenuItemProps} from '.'

export const FullScreenMenuItem = ({href, text}: FullScreenMenuItemProps) => (
  <li>
    <a href={href}>{text}</a>
  </li>
)
