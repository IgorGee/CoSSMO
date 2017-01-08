// @flow
import React from 'react'
import { Card, CardTitle, CardText, Chip } from 'react-toolbox'
import FacultyAvatar from '../../../Utilities/FacultyAvatar'

import s from './styles.scss'

const ConferencePresentationCard = props => {
  const speakerChips = props.speakers.map((name, index) => (
    <Chip
      key={index}
      style={{ display: 'inline-flex' }}
    >
      {FacultyAvatar(name)}
      <span>{name}</span>
    </Chip>
  ))

  return (
    <Card className={s.root}>
      <CardTitle
        title={props.title}
        subtitle={`${props.event} in ${props.location} on ${props.date}`}
      />
      <CardText>
        <h5>Speakers</h5><br />
        {speakerChips}
      </CardText>
    </Card>
  )
}

export default ConferencePresentationCard
