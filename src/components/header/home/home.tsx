import * as React from 'react'
import {Left} from './left'
import {Right} from './right'
import * as s from './home.module.scss'

export const Home = () => (
  <section className={s.home}>
    <Left />
    <Right />
  </section>
)
