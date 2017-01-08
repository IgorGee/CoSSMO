// @flow
import React from 'react'
import { Card, CardTitle, CardText } from 'react-toolbox'

import s from './styles.scss'

const VisitorCard = props => (
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

export default VisitorCard
