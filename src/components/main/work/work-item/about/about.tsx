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
  animate,
}: AboutProps) => (
  <div
    className={classNames(s.about, {
      [s.moreSpace]: moreSpace,
      [s.inVideo]: inVideo,
    })}
  >
    <Title animate={animate} title={title} />
    <Caption animate={animate} caption={caption} />
    <Description animate={animate} description={description} />
  </div>
)
