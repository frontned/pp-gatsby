import * as React from 'react'
import {Social} from '../../../common/social'
import * as s from './right.module.scss'
import HeroImage from '../../../../images/hero_image.webp'

export const Right = () => (
  <div className={s.right}>
    <img
      className={s.photo}
      src={HeroImage}
      alt="A photo of Paulius Slavinskis"
    />
    <Social />
  </div>
)
