// @flow
import React from 'react'
import { Tab, Tabs } from 'react-toolbox'
import OutreachCard from './OutreachCard'
import ResearchCard from './ResearchCard'

import s from './styles.scss'

import researchObjects from '../../public_data/research.json'

const researchCards = researchObjects.map((research, index) => (
  <ResearchCard
    key={index}
    title={research.title}
    description={research.description}
    principalInvestigators={research.principalInvestigators}
    people={research.people}
  />
))

export default class Projects extends React.Component {
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
          <Tab label="Outreach">
            <h4 className={s.outreach}>2015</h4>
            <OutreachCard
              className={s.outreach}
              title="MedStartUp"
              text="We have met with even more companies than before.
              We are excited to have them join our cause."
            />

            <h4 className={s.outreach}>2014</h4>
            <OutreachCard
              className={s.outreach}
              title="MedStartUp"
              text="MedStartUp brings together academic institutions and companies
              from the pharmaceutical, biotechnology, medical technology and
              healthcare industries, where innovation, scientific excellence
              and commercial goals are of utmost importance.\n\n
              CoSSMO paired up with Sovinty, a French company hoping to solve
              issue of healthcare growing at an exponential rate that
              accompanies a shortage of doctors as well as increasingly
              limited public finances. Sovinty\'s partnership with CoSSMO
              aims to develop tools for patients that will make use of machine
              learning methods, intelligent algorithms, as well as algorithms
              for detecting preconditions for undesirable states."
            />
            <OutreachCard
              className={s.outreach}
              title="Trains Don't Vanish!"
              subtitle="ROADEF/EURO 2014 Challenge"
              text="This was a challenge created by the EURO XXVI Conference in
              Rome 2013. It addressed problems including train congestion,
              increased traffic, train arrivals and departures, and more. The
              challenge was to create the best algorithm to improve the transit
              system's efficiency.
              CoSSMO qualified into the finals scoring 3rd place!"
              videoSrc="https://www.youtube.com/embed/simcQFPJJas"
            />
          </Tab>
          <Tab label="Research">
            {researchCards}
          </Tab>
          <Tab label="Education">
            <small>Third Content</small>
          </Tab>
        </Tabs>
      </section>
    )
  }
}
