import * as React from 'react'
import {Arrow} from '../../../common/arrow'
import {Name} from './name'
import {Title} from './title'
import * as s from './left.module.scss'

export const Left = () => (
  <div className={s.left}>
    <Name />
    <Title />
    <div className={s.container}>
      <Arrow />
    </div>
  </div>
)
