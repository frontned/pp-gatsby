import * as React from 'react'
import {SectionTitle} from '../../common/section-title'
import {Contact} from './contact'
import {Social} from './social'
import './left.scss'

export const Left = () => (
  <div className="left">
    <SectionTitle pre="Let's make a" title="Contact" />
    <Contact />
    <Social />
  </div>
)
