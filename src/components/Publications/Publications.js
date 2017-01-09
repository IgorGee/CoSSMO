// @flow
import React from 'react'
import ConferenceProceedingCard from './ConferenceProceedingCard'
import RefereedJournalCard from './RefereedJournalCard'

import conferenceProceedingObjects from '../../public_data/publications/conference_proceedings.json'
import refereedJournalObjects from '../../public_data/publications/refereed_journal_papers.json'

import s from './styles.scss'

const proceedings = conferenceProceedingObjects.map((conference, index) => (
  <ConferenceProceedingCard
    key={index}
    title={conference.title}
    event={conference.event.name}
    location={conference.event.location}
    date={`${conference.event.date.month}/${conference.event.date.year}`}
    authors={conference.authors}
    pages={conference.event.pages}
    editors={conference.editors}
  />
))

const journals = refereedJournalObjects.map((refJournal, index) => (
  <RefereedJournalCard
    key={index}
    title={refJournal.title}
    event={refJournal.journal.name}
    volume={refJournal.journal.volume}
    authors={refJournal.authors}
    pages={refJournal.journal.pages}
  />
))

export default class Publications extends React.Component {
  render() {
    return (
      <section className={s.root}>
        <h3>Conference Proceedings</h3>
        {proceedings}
        <h3>Refereed Journal Papers</h3>
        {journals}
      </section>
    )
  }
}
