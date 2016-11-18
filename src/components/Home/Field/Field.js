import React from 'react'

import s from './styles.scss'

const Field = props => {
  const topics = props.topics.map(topic =>
    <div className={s.topic}>{topic}</div>
  )

  return (
    <section className={s.root}>
      <h1>{props.name}</h1>
      {topics}
    </section>
  )
}

export default Field
