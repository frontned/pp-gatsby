import * as React from 'react'
import {Header} from '../components/header'
import {Main} from '../components/main'
import {Footer} from '../components/footer'
import {FullScreenMenu} from '../components/full-screen-menu'
import '../scss/app.scss'

const Index = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Poppins:wght@200;300;600&display=swap"
      rel="stylesheet"
    />
    <Header />
    <Main />
    <Footer />
    <FullScreenMenu />
  </>
)

export default Index
