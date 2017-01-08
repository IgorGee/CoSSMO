// @flow
import React from 'react'
import { Card, CardText } from 'react-toolbox'

import s from './styles.scss'

const NewsCard = props => (
  <Card className={s.root}>
    <CardText>
      {props.children}
    </CardText>
  </Card>
)

export default NewsCard
