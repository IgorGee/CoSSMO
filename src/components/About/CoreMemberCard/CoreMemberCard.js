// @flow
import React from 'react'
import { Card, CardTitle, CardText, CardMedia } from 'react-toolbox'

import s from './styles.scss'

const CoreMemberCard = props => (
  <Card className={s.root}>
    <CardMedia
      aspectRatio="square"
      image={props.image}
    />
    <CardTitle
      title={props.title}
      subtitle={props.subtitle}
    />
    <CardText>
      {props.description}
    </CardText>
  </Card>
)

export default CoreMemberCard
