// @flow
import React from 'react'
import { Card, CardTitle, CardText, Chip } from 'react-toolbox'
import FacultyAvatar from '../../../Utilities/FacultyAvatar'

import s from './styles.scss'

const ConferenceProceedingCard = props => {
  const authorChips = props.authors.map((name, index) => (
    <Chip
      key={index}
      style={{ display: 'inline-flex' }}
    >
      {FacultyAvatar(name)}
      <span>{name}</span>
    </Chip>
  ))

  const pages = props.pages ?
    `(pg. ${props.pages.start}-${props.pages.end})` : ''

  const editors = props.editors.length > 0 ?
    (
      <div className={s.editors}>
        <span>Editors: </span>
        <i>{props.editors.join(', ')}</i>
      </div>
    )
    : null


  return (
    <Card className={s.root}>
      <CardTitle
        title={props.title}
        subtitle={`${props.event} in ${props.location} on ${props.date} ${pages}`}
      />
      <CardText>
        <h5>Authors</h5><br />
        {authorChips}
        {editors}
      </CardText>
    </Card>
  )
}

export default ConferenceProceedingCard
