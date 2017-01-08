// @flow
import React from 'react'
import { Card, CardTitle } from 'react-toolbox'

import s from './styles.scss'

const InvitedLectureCard = props => (
  <Card className={s.root}>
    <CardTitle
      title={props.title}
      subtitle={`Hosted by ${props.host} in ${props.location} on ${props.date}`}
    />
  </Card>
)

export default InvitedLectureCard
