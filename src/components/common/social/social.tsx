import * as React from 'react'
import {SocialItem} from './social-item'
import IconInstagram from '../../../images/icon_instagram.svg'
import IconLinkedin from '../../../images/linkedin.svg'
import IconDribbble from '../../../images/icon_dribbble.svg'
import * as s from './social.module.scss'
import {SocialProps} from '.'
import classNames from 'classnames'

const socialItems = [
  {
    href: 'https://www.instagram.com/paulie.darko/',
    src: IconInstagram,
  },
  {
    href: 'https://www.linkedin.com/in/paulius-slavinskis-0b4b0311b/',
    src: IconLinkedin,
  },
  {
    href: 'https://dribbble.com/zlastis',
    src: IconDribbble,
  },
]

export const Social = ({className, itemClassName}: SocialProps) => (
  <ul className={classNames(s.social, className)}>
    {socialItems.map(({href, src}) => (
      <SocialItem key={href} className={itemClassName} href={href} src={src} />
    ))}
  </ul>
)
