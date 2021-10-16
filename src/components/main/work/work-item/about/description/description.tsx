import * as React from 'react'
import * as s from './description.module.scss'
import {DescriptionProps} from '.'
import classNames from 'classnames'

export const Description = ({
  description,
  animate,
  animated,
}: DescriptionProps) => (
  <p
    className={classNames(s.description, {
      [s.animate]: animate,
      [s.animated]: animated,
    })}
  >
    {description}
  </p>
)
