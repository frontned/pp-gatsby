import * as React from 'react'
import * as s from './number.module.scss'
import {NumberProps} from '.'
import classNames from 'classnames'

export const Number = ({number, animate, moreSpace, inVideo}: NumberProps) => (
  <span
    className={classNames(s.number, {
      [s.animate]: animate,
      [s.moreSpace]: moreSpace,
      [s.inVideo]: inVideo,
    })}
  >
    / 0{number}
  </span>
)
