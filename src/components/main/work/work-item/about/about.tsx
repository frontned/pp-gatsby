import * as React from 'react'
import {Title} from './title'
import {Caption} from './caption'
import {Description} from './description'
import * as s from './about.module.scss'
import {AboutProps} from '.'
import classNames from 'classnames'

export const About = ({
  moreSpace,
  inVideo,
  title,
  caption,
  description,
}: AboutProps) => (
  <div
    className={classNames(s.about, {
      [s.moreSpace]: moreSpace,
      [s.inVideo]: inVideo,
    })}
  >
    <Title title={title} />
    <Caption caption={caption} />
    <Description description={description} />
  </div>
)
