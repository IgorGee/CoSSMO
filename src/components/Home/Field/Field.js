import React from 'react'

import s from './styles.scss'

const getBackgroundImageStyle = image => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${image}) no-repeat center center`,
  backgroundSize: 'cover'
})

const getDisciplinesStyle = props => {
  const topics = props.topics.map((topic, index) =>
    <div
      className={s.discipline}
      style={getBackgroundImageStyle(topic.image)}
      key={index}
    >
      <h5>{topic.name}</h5>
    </div>
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
    <div
      className={s.topic}
      style={getBackgroundImageStyle(topic.image)}
      key={index}
    >
      <h4>{topic.name}</h4>
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
