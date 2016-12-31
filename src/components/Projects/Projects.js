// @flow
import React from 'react'
import { Tab, Tabs, Card, CardMedia, CardTitle, CardText } from 'react-toolbox'

import s from './styles.scss'

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
            <Card className={s.outreach}>
              <CardTitle
                title="MedStartUp"
              />
              <CardText>
                We have met with even more companies than before. We are excited
                to have them join our cause.
              </CardText>
            </Card>

            <h4 className={s.outreach}>2014</h4>
            <Card className={s.outreach}>
              <CardTitle
                title="MedStartUp"
              />
              <CardText>
                MedStartUp brings together academic institutions and companies
                from the pharmaceutical, biotechnology, medical technology and
                healthcare industries, where innovation, scientific excellence
                and commercial goals are of utmost importance. <br /><br />
                CoSSMO paired up with Sovinty, a French company hoping to solve
                issue of healthcare growing at an exponential rate that
                accompanies a shortage of doctors as well as increasingly
                limited public finances. Sovinty\'s partnership with CoSSMO
                aims to develop tools for patients that will make use of machine
                learning methods, intelligent algorithms, as well as algorithms
                for detecting preconditions for undesirable states.
              </CardText>
            </Card>

            <Card className={s.outreach}>
              <CardTitle
                title="Trains Don't Vanish!"
                subtitle="ROADEF/EURO 2014 Challenge"
              />
              <CardText>
                MedStartUp brings together academic institutions and companies
                from the pharmaceutical, biotechnology, medical technology and
                healthcare industries, where innovation, scientific excellence
                and commercial goals are of utmost importance. <br /><br />
                CoSSMO paired up with Sovinty, a French company hoping to solve
                issue of healthcare growing at an exponential rate that
                accompanies a shortage of doctors as well as increasingly
                limited public finances. Sovinty\'s partnership with CoSSMO
                aims to develop tools for patients that will make use of machine
                learning methods, intelligent algorithms, as well as algorithms
                for detecting preconditions for undesirable states.
              </CardText>

              <iframe
                width="560" height="315"
                src="https://www.youtube.com/embed/simcQFPJJas"
                frameBorder="0" allowFullScreen
              />
            </Card>
          </Tab>
          <Tab label="Research">
            <small>Second Content</small>
          </Tab>
          <Tab label="Education">
            <small>Third Content</small>
          </Tab>
        </Tabs>
      </section>
    )
  }
}
