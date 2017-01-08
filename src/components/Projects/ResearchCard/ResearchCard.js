// @flow
import React from 'react'
import { Card, CardTitle, CardText, Chip } from 'react-toolbox'
import FacultyAvatar from '../../../Utilities/FacultyAvatar'

import s from './styles.scss'

const ReserachCard = props => {
  const leadPIChips = props.principalInvestigators.map((name, index) => (
    <Chip
      key={index}
      style={{ display: 'inline-flex' }}
    >
      {FacultyAvatar(name)}
      <span>{name}</span>
    </Chip>
  ))
  const contributerChips = props.people.map((person, index) => (
    <Chip
      key={index}
      style={{ display: 'inline-flex' }}
    >
      {FacultyAvatar(person.name)}
      <span>{person.name}</span>
    </Chip>
  ))

  return (
    <Card className={s.root}>
      <CardTitle
        title={props.title}
      />
      <CardText>
        {props.description}<br /><br />
        <h5>Contributers</h5><br />
        {leadPIChips}
        {contributerChips}
      </CardText>
    </Card>
  )
}

export default ReserachCard
