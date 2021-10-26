import * as React from 'react'
import {ImageProps} from '.'
import * as s from './image.module.scss'
import classNames from 'classnames'

export const Image = ({src, animate, inVideo, bigger}: ImageProps) => (
  <img
    className={classNames(s.image, {
      [s.animate]: animate,
      [s.inVideo]: inVideo,
      [s.bigger]: bigger,
    })}
    src={src}
  />
)
