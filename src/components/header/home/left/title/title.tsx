import * as React from 'react'
import * as s from './title.module.scss'
import classNames from 'classnames'

export const Title = () => (
  <div className={s.title}>
    <div className={classNames(s.title, s.one)}>Graphic</div>
    <div className={classNames(s.title, s.two)}>Designer</div>
    <div className={classNames(s.title, s.three)}>Illustrator</div>
  </div>
)
