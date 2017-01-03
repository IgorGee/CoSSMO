// @flow
import React from 'react'
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox'

import s from './styles.scss'

const OutReachWithVideo = props => (
  <Card className={s.root}>
    <CardTitle
      title={props.title}
      subtitle={props.subtitle}
    />
    <CardText>
      {props.text.split('\n').map((section, index) => (
        <span key={index}>
          {section}
          <br />
        </span>
      ))}
    </CardText>
    <CardMedia>
      <iframe
        width="560" height="315"
        src={props.videoSrc}
        frameBorder="0" allowFullScreen
      />
    </CardMedia>
  </Card>
)

const OutreachCard = props => {
  if (props.videoSrc) return OutReachWithVideo(props)
  return (
    <Card className={s.root}>
      <CardTitle
        title={props.title}
        subtitle={props.subtitle}
      />
      <CardText>
        {props.text.split('\\n').map((section, index) => (
          <span key={index}>
            {section}
            <br />
          </span>
        ))}
      </CardText>
    </Card>
  )
}

export default OutreachCard
