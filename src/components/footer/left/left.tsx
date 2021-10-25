import * as React from 'react'
import {SectionTitle} from '../../common/section-title'
import {Contact} from './contact'
import {Social} from './social'
import * as s from './left.module.scss'

export const Left = () => (
  <div className={s.left}>
    <SectionTitle pre="Let's make a" title="Contact" />
    <Contact />
    <Social />
  </div>
)
