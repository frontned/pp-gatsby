import * as React from 'react'
import {Number} from './number'
import {Image} from './image'
import Innuendo2 from '../../../../images/innuendo2.webp'
import {MobileImage} from './mobile-image'
import {About} from './about'
import * as s from './work-item.module.scss'
import {WorkItemProps} from '.'
import classNames from 'classnames'
import {Video} from './video'

export const WorkItem = ({
  reverse,
  video,
  number,
  image,
  moreSpace,
  title,
  caption,
  description,
  biggerImage,
}: WorkItemProps) => (
  <div className={classNames(s.item, {[s.reverse]: reverse, [s.video]: video})}>
    <Number moreSpace={moreSpace} number={number} animated />
    {image ? <Image bigger={biggerImage} src={image} animated /> : null}
    {video ? <Video video={video} /> : null}
    {image ? <MobileImage backgroundImage={image} /> : null}
    <About
      moreSpace={moreSpace}
      title={title}
      caption={caption}
      description={description}
    />
  </div>
)
