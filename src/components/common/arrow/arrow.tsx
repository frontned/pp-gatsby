import * as React from 'react'
import * as s from './arrow.module.scss'
import Circle from '../../../images/circle.svg'

export const Arrow = () => {
  const handleClick = () =>
    document.getElementById('about').scrollIntoView({behavior: 'smooth'})

  return (
    <div className={s.arrow} onClick={handleClick}>
      <div className={s.inner} />
      <div className={s.pointer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.993"
          height="55.88"
          viewBox="0 0 20.993 55.88"
        >
          <path
            id="Path_6"
            data-name="Path 6"
            d="M960,834v55"
            transform="translate(-949.178 -834)"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M952,931l10.968,10.516,9.3-10.516"
            transform="translate(-951.654 -886.357)"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
          />
        </svg>
      </div>
      <img src={Circle} />
    </div>
  )
}
