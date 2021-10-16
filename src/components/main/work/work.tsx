import * as React from 'react'
import {SectionTitle} from '../../common/section-title'
import {WorkItem} from './work-item'
import * as s from './work.module.scss'
import Innuendo2 from '../../../images/innuendo2.webp'
import Toilet from '../../../images/toilet.webp'
import EskedarCoffee from '../../../images/eskedar_coffee.webp'
import RemoteTulik from '../../../images/remote_tulik_1600x1200.webp'
import DFSocials from '../../../images/DF_socials.webp'
import Video from '../../../video/video.mp4'
import KvietimasFinal from '../../../images/kvietimas_final.webp'

const items = [
  {
    image: Innuendo2,
    title: 'Innuendo',
    caption: 'PERSONAL PROJECT | ILLUSTRATION',
    description:
      'A showcase of egoistic, self-centred and image obsessed society. Sometimes it is more important to act hip thank think for yourself, look “artsy” than to craft any kind of art itself.',
  },
  {
    reverse: true,
    image: Toilet,
    title: 'Respect',
    caption: 'POSTER CONTEST “NEI KARTU NEI SALDU” | ILLUSTRATION',
    description:
      'A poster contest organised by “Kūrybinės idėjos” to raise the awareness of creative copyrights. The scene of wealthy man taking a leak on human faced urinal is the direct metaphor of greedy business men taking advantage of creative minds, showing zero respect for someones intellectual property.',
  },
  {
    moreSpace: true,
    biggerImage: true,
    image: EskedarCoffee,
    title: 'Escedar coffee',
    caption: 'ILLUSTRATION',
    description:
      'A simple illustration for Escedar coffee package. Ethiopian coffee culture fused with modern day aesthetics.',
  },
  {
    reverse: true,
    biggerImage: true,
    image: RemoteTulik,
    title: 'The remoter',
    caption: 'PERSONAL PROJECT | ILLUSTRATION',
    description:
      'Just a silly weekend evening illustration during the first quarantine lockdown in Lithuania. Everybody felt a bit claustrophobic, bored and sometimes a bit mad. For me it meant more time at my quality spots.',
  },
  {
    moreSpace: true,
    biggerImage: true,
    image: DFSocials,
    title: 'Social fasting',
    caption: 'DOFASTING APP | SOCIAL MEDIA ILLUSTRATION SERIES',
    description:
      'A series of social media posts illustrating a struggle of a simple woman trying to get through another day (or period) of intermittent fasting. This campaign is focused to promote DoFasting app and educate people about intermittent fasting.',
  },
  {
    video: Video,
    title: 'Dofasting app case study',
    caption: 'YOUTUBE AD | ILLUSTRATION | MOTION GRAPHICS | ART DIRECTION',
    description:
      'An explanatory video advertising DoFASTING app and its features. We were tasked to craft some fine minimalist motion graphics, clean and streamlined animations according to product demographics. The main challenge was to communicate a message in an abstract and stylised form.',
  },
  {
    image: KvietimasFinal,
    title: 'Kilowood',
    caption: 'INVITATION CARD | ILLUSTRATION | DESIGN',
    description:
      '“You’re either a superstar or an alley bum, a hero or a villain” that was the slogan of a company Christmas party hosted by Kilo Health. Any kind of social or cultural contrast was the very essence of this event.',
  },
]

export const Work = () => (
  <section className={s.work} id="work">
    <SectionTitle
      pre="Selected pieces"
      title="Work"
      orange
      moreSpace
      flexStart
      className={s.sectionTitle}
      textClassName={s.text}
    />
    {items.map(
      (
        {
          image,
          title,
          caption,
          description,
          reverse,
          moreSpace,
          biggerImage,
          video,
        },
        index
      ) => (
        <WorkItem
          key={index}
          video={video}
          moreSpace={moreSpace}
          biggerImage={biggerImage}
          reverse={reverse}
          number={index + 1}
          image={image}
          title={title}
          caption={caption}
          description={description}
        />
      )
    )}
  </section>
)
