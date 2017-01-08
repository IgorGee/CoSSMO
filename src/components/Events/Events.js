// @flow
import React from 'react'
import { Tabs, Tab } from 'react-toolbox'
import ConferencePresentationCard from './ConferencePresentationCard'
import InvitedLectureCard from './InvitedLectureCard'
import VisitorCard from './VisitorCard'
import NewsCard from './NewsCard'

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
            <h4>2015</h4>
            <VisitorCard
              title="Professor Daniel Dufresne, Centre for Actuarial Studies, Department of Economics, University of Melbourne"
              subtitle="November 25 - December 20"
              text="During his visit to the Institute, Prof Dufresne resume our collaboration working on the problem of dimension reduction for simulation and numerical evaluation of the sum of lognormal random variables.\n\nHe presented informal seminars every week on Wednesdays 2-3 pm at Hunter North 1000 B."
            />
            <h4>2014</h4>
            <VisitorCard
              title="Professor Daniel Dufresne, Centre for Actuarial Studies, Department of Economics, University of Melbourne"
              subtitle="April 21-25 and May 2 - 8"
              text='During his visit to the Institute, Prof Dufresne conducted research on computational efficiency for problems in financial mathematics. His lectures provided the basis for a scholarly paper on the simulation of financial options under a change of measure for stochastic volatility models. Students that work within these projects include Elizabeth Pysher (orthogonal polynomials and mathematica code) and Alexey Nikolaev (Filtered Monte Carlo simulation for the estimation of Lyapunov exponents).\n\nApril 23 and 25: 2 - 3 pm. "Recursion formulas for Gram Charlier Distributions", Room N 1000 C.\nMay 5 and 6: 2 - 3 pm. "Change of Measure for the Square Root Process", Room N 1000 C.'
            />
          </Tab>
          <Tab label="News">
            <h4>2013</h4>
            <NewsCard>
              <span>
                On April 29, 2013 the CUNY Board of Trustees approved the creation of the CUNY Institute for Computer Simulation, Stochastic Modeling and Optimization.
              </span>
              <br /><br />
              <a href="http://www.cuny.edu/about/administration/offices/aa/acr/AcademicallySpeakingMayJune2013.pdf">
                AS, vol 5, issue 5, May 2013
              </a>
            </NewsCard>
            <h4>2012</h4>
            <NewsCard>
              <span>
                On November 14, 2012 Hunter College Senate approves resolution to establish the CUNY Institute CoSSMO at Hunter College.
              </span>
            </NewsCard>
          </Tab>
        </Tabs>
      </section>
    )
  }
}
