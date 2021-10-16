import * as React from 'react'
import * as s from './title.module.scss'
import {TitleProps} from '.'
import classNames from 'classnames'

export const Title = ({title, animate, animated}: TitleProps) => (
  <h3
    className={classNames(s.title, {
      [s.animate]: animate,
      [s.animated]: animated,
    })}
  >
    {title}
  </h3>
)
