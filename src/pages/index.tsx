import * as React from 'react'
import {Header} from '../components/header'
import {Main} from '../components/main'
import {Footer} from '../components/footer'
import {FullScreenMenu} from '../components/full-screen-menu'
import '../scss/app.scss'

const Index = () => {
  const [fullScreenMenuOpened, setFullScreenMenuOpened] = React.useState(false)

  return (
    <>
      <title>Portfolio</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&family=Poppins:wght@200;300;600&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="../images/Logo.svg" type="image/icon type" />
      <Header onOpenFullScreenMenu={() => setFullScreenMenuOpened(true)} />
      <Main />
      <Footer />
      {fullScreenMenuOpened ? (
        <FullScreenMenu onClose={() => setFullScreenMenuOpened(false)} />
      ) : null}
    </>
  )
}

export default Index
