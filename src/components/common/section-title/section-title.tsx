import * as React from 'react'
import {SectionTitleProps} from '.'
import * as s from './section-title.module.scss'
import classNames from 'classnames'

export const SectionTitle = ({
  pre,
  title,
  orange,
  flexStart,
  moreSpace,
}: SectionTitleProps) => (
  <div
    className={classNames(s.sectionTitle, {
      [s.orange]: orange,
      [s.flexStart]: flexStart,
      [s.moreSpace]: moreSpace,
    })}
  >
    <div className={s.text}>
      <div>{pre}</div>
      <h2>{title}</h2>
    </div>
  </div>
)
