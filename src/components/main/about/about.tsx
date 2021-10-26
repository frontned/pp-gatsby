import * as React from 'react'
import * as s from './about.module.scss'
import {SectionTitle} from '../../common/section-title'
import Asara from '../../../images/asara.webp'
import Kreive from '../../../images/kreive1.svg'

export const About = () => (
  <section className={s.about} id="about">
    <div className={s.content}>
      <SectionTitle className={s.sectionTitle} pre="Something" title="About" />
      <div className={s.art}>
        <div className={s.background}>
          <div className={s.color} />
          <img className={s.image} src={Asara} alt="Artwork" />
        </div>
        <div className={s.description}>
          <p>
            Hello! I am Paulius Slavinskis - a graphic designer - illustrator
            based in Vilnius. I’ve been speaking visual for at least 6 years.
            Design for me is a radical passion and a secret lover. I do many
            different fields and design doctrines like motion graphics,
            editorial design, advertising design and many more. On recent years
            I’ve been shifting my focus on web and digital product design. I
            very much value both creative madness and elegant funcionality. For
            me all is one and one is all. Design Is a never ending journey so
            I’m always up for adventure so if you’re interested in partnership -
            let’s chat!
          </p>
        </div>
      </div>
    </div>
    <img className={s.backgroundElement} src={Kreive} alt="" />
  </section>
)
