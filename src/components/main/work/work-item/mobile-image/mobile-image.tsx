import * as React from 'react'
import * as s from './mobile-image.module.scss'
import {MobileImageProps} from '.'

export const MobileImage = ({backgroundImage}: MobileImageProps) => (
  <img className={s.mobileImage} src={backgroundImage} alt="Artwork Image" />
)
