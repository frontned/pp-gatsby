import * as React from 'react'
import {SocialListItemProps} from '.'
import * as s from './social-list-item.module.scss'

export const SocialListItem = ({href, src}: SocialListItemProps) => (
  <li className={s.item}>
    <a target="_blank" href={href}>
      <img src={src} alt="Social Media Icon" />
    </a>
  </li>
)
