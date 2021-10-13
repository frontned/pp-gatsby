import * as React from 'react'
import {SocialItemProps} from '.'
import * as s from './social-item.module.scss'

export const SocialItem = ({href, src}: SocialItemProps) => (
  <li className={s.item}>
    <a target="_blank" href={href}>
      <img src={src} />
    </a>
  </li>
)
