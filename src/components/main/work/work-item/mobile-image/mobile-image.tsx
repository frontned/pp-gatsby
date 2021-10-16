import * as React from 'react'
import * as s from './mobile-image.module.scss'
import {MobileImageProps} from '.'

export const MobileImage = ({backgroundImage}: MobileImageProps) => (
  <div className={s.mobileImage} style={{backgroundImage}} />
)
