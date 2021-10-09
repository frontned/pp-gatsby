import * as React from 'react'
import {Header} from '../components/header'
import {Main} from '../components/main'
import {Footer} from '../components/footer'
import {FullScreenMenu} from '../components/full-screen-menu'
import '../scss/app.scss'

const Index = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <FullScreenMenu />
    </>
  )
}

export default Index
