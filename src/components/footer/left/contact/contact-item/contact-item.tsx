import * as React from 'react'
import * as s from './contact-item.module.scss'
import {ContactItemProps} from '.'

export const ContactItem = ({title, description}: ContactItemProps) => (
  <div className={s.contactItem}>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
  </div>
)
