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
  animated,
}: AboutProps) => (
  <div
    className={classNames(s.about, {
      [s.moreSpace]: moreSpace,
      [s.inVideo]: inVideo,
    })}
  >
    <Title animate={animate} animated={animated} title={title} />
    <Caption animate={animate} animated={animated} caption={caption} />
    <Description
      animate={animate}
      animated={animated}
      description={description}
    />
  </div>
)
