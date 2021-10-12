import * as React from 'react'
import {Left} from './left'
import {Right} from './right'
import * as s from './footer.module.scss'

export const Footer = () => (
  <footer className={s.footer} id="contact">
    <Left />
    <Right />
  </footer>
)
