import * as React from 'react'
import {SocialItemProps} from '.'
import * as s from './social-item.module.scss'
import classNames from 'classnames'

export const SocialItem = ({href, src, className}: SocialItemProps) => (
  <li className={classNames(s.item, className)}>
    <a target="_blank" href={href}>
      <img src={src} alt="Social Media Icon" />
    </a>
  </li>
)
