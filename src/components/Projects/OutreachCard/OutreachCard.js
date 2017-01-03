// @flow
import React from 'react'
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox'

const OutReachWithVideo = props => (
  <Card>
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

const Outreach = props => {
  if (props.videoSrc) return OutReachWithVideo(props)
  return (
    <Card>
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

export default Outreach
