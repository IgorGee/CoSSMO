import React from 'react'

import s from './styles.scss'

const Field = props => {
  const topics = props.topics.map(topic =>
    <div className={s.topic}><h6>{topic}</h6></div>
  )

  return (
    <section className={s.root}>
      <h1>{props.name}</h1>
      <div className={s.topics}>{topics}</div>
    </section>
  )
}

export default Field
