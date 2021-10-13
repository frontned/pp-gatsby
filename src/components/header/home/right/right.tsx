import * as React from 'react'
import {Social} from './social'
import * as s from './right.module.scss'

export const Right = () => (
  <div className={s.right}>
    <img
      className={s.photo}
      src="./images/hero_image.png"
      alt="A photo of Paulius Slavinskis"
    />
    <Social />
  </div>
)
