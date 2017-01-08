// @flow
import React from 'react'
import { Tabs, Tab } from 'react-toolbox'
import ConferencePresentationCard from './ConferencePresentationCard'
import InvitedLectureCard from './InvitedLectureCard'

import s from './styles.scss'

import conferencePresentationObjects from '../../public_data/presentations/conference_presentations.json'
import invitedLectureObjects from '../../public_data/presentations/invited_lectures.json'

const conferencePresentationCards = conferencePresentationObjects
  .map((presentation, index) => (
    <ConferencePresentationCard
      key={index}
      title={presentation.title}
      speakers={presentation.speakers}
      event={presentation.event}
      location={presentation.location}
      date={`${presentation.date.month}/${presentation.date.year}`}
    />
))

const invitedLectureCards = invitedLectureObjects
  .map((lecture, index) => (
    <InvitedLectureCard
      key={index}
      title={lecture.title}
      location={lecture.location}
      host={lecture.host}
      date={`${lecture.date.month}/${lecture.date.year}`}
    />
))

export default class Events extends React.Component {
  state = {
    index: 0
  }

  handleTabChange = index => {
    this.setState({ index })
  }

  render() {
    return (
      <section className={s.root}>
        <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
          <Tab label="Presentations">
            <h3>Conference Presentations</h3>
            {conferencePresentationCards}
            <h3>Invited Lectures</h3>
            {invitedLectureCards}
          </Tab>
          <Tab label="Visitors">
          </Tab>
          <Tab label="News">
          </Tab>
        </Tabs>
      </section>
    )
  }
}
