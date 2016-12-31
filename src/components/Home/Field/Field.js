// @flow
import React from 'react'

import s from './styles.scss'

const getBackgroundImageStyle = image => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${image}) no-repeat center center`,
  backgroundSize: 'cover'
})

const getDisciplinesStyle = props => {
  const topics = props.topics.map((topic, index) =>
    <a
      key={index}
      target="_blank"
      rel="noopener noreferrer"
      href={topic.link}
      className={s.discipline}
      style={getBackgroundImageStyle(topic.image)}
    >
      <h5>{topic.name}</h5>
    </a>
  )

  return (
    <section className={s.root}>
      <h2>{props.name}</h2>
      <div className={s.topics}>{topics}</div>
    </section>
  )
}

const Field = props => {
  if (props.disciplines) return getDisciplinesStyle(props)

  const topics = props.topics.map((topic, index) =>
    <a
      key={index}
      target="_blank"
      rel="noopener noreferrer"
      href={topic.link}
      className={s.topic}
      style={getBackgroundImageStyle(topic.image)}
    >
      <h4>{topic.name}</h4>
    </a>
  )

  return (
    <section className={s.root}>
      <h1>{props.name}</h1>
      <div className={s.topics}>{topics}</div>
    </section>
  )
}

export default Field
