import * as React from 'react'
import * as s from './caption.module.scss'
import {CaptionProps} from '.'
import classNames from 'classnames'

export const Caption = ({caption, animate}: CaptionProps) => (
  <p
    className={classNames(s.caption, {
      [s.animate]: animate,
    })}
  >
    {caption}
  </p>
)
