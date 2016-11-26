import React from 'react'

import s from './styles.scss'

const getBackgroundImageStyle = image => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${image}) no-repeat`,
  backgroundSize: 'cover'
})

const Field = props => {
  const topics = props.topics.map((topic, index) =>
    <div
        className={s.topic}
        style={getBackgroundImageStyle(topic.image)}
        key={index}>
      <h6>{topic.name}</h6>
    </div>
  )

  return (
    <section className={s.root}>
      <h1>{props.name}</h1>
      <div className={s.topics}>{topics}</div>
    </section>
  )
}

export default Field
