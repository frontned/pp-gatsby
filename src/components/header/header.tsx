import * as React from 'react'
import {Nav} from './nav'
import {Home} from './home'
import {HeaderProps} from '.'

export const Header = ({onOpenFullScreenMenu}: HeaderProps) => (
  <header id="home">
    <Nav onOpenFullScreenMenu={onOpenFullScreenMenu} />
    <Home />
  </header>
)
