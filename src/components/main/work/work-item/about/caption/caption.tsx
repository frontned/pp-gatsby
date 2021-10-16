import * as React from 'react'
import * as s from './caption.module.scss'
import {CaptionProps} from '.'
import classNames from 'classnames'

export const Caption = ({caption, animate, animated}: CaptionProps) => (
  <p
    className={classNames(s.caption, {
      [s.animate]: animate,
      [s.animated]: animated,
    })}
  >
    {caption}
  </p>
)
