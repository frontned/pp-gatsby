import * as React from 'react'
import * as s from './video.module.scss'
import {VideoProps} from '.'

export const Video = ({video}: VideoProps) => (
  <video className={s.video} controls>
    <source src={video} type="video/mp4" />
    <source src={video} type="video/ogg" />
    Your browser does not support HTML video.
  </video>
)
