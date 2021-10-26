import * as React from 'react'
import {Number} from './number'
import {Image} from './image'
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
}: WorkItemProps) => {
  const [animate, setAnimate] = React.useState(false)
  const workItem = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    if (window.innerWidth >= 1024) {
      window.addEventListener('scroll', () => {
        if (workItem) {
          if (workItem.current.getBoundingClientRect().y <= 100) {
            setAnimate(true)
          } else {
            setAnimate(false)
          }
        }
      })
    } else {
      setAnimate(true)
    }
  }, [])

  return (
    <div
      ref={workItem}
      className={classNames(s.item, {
        [s.reverse]: reverse,
        [s.video]: video,
      })}
    >
      <Number animate={animate} moreSpace={moreSpace} number={number} />
      {image ? (
        <Image animate={animate} bigger={biggerImage} src={image} />
      ) : null}
      {video ? <Video video={video} /> : null}
      {image ? <MobileImage backgroundImage={image} /> : null}
      <About
        moreSpace={moreSpace}
        title={title}
        caption={caption}
        description={description}
        animate={animate}
      />
    </div>
  )
}
