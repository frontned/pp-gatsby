import * as React from 'react'
import {SocialListItem} from './social-list-item'
import InstaOrange from '../../../../images/insta-orange.svg'
import DribbbleOrange from '../../../../images/dribble-orange.svg'
import LinkedinOrange from '../../../../images/linkedin-orange.svg'
import * as s from './social.module.scss'

const socialItems = [
  {
    href: 'https://www.instagram.com/paulie.darko/',
    src: InstaOrange,
  },
  {
    href: 'https://dribbble.com/zlastis',
    src: DribbbleOrange,
  },
  {
    href: 'https://www.linkedin.com/in/paulius-slavinskis-0b4b0311b/',
    src: LinkedinOrange,
  },
]

export const Social = () => (
  <div className={s.social}>
    <div className={s.title}>Or stalk me on these</div>
    <ul className={s.list}>
      {socialItems.map(({href, src}) => (
        <SocialListItem key={href} href={href} src={src} />
      ))}
    </ul>
  </div>
)
