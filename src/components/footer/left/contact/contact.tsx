import * as React from 'react'
import {ContactItem} from './contact-item'
import * as s from './contact.module.scss'

const contactItems = [
  {
    title: 'phone',
    description: '+370 6 35 94960',
  },
  {
    title: 'email',
    description: 'paulius.slavinskis@gmail.com',
  },
]

export const Contact = () => (
  <div className={s.contact}>
    {contactItems.map(({title, description}) => (
      <ContactItem key={title} title={title} description={description} />
    ))}
  </div>
)
