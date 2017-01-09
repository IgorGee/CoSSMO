// @flow
import React from 'react'
import { Button, Tab, Tabs } from 'react-toolbox'

import s from './styles.scss'

export default class Opportunities extends React.Component {
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
          <Tab label="Faculty">
            <h3>Resident Scholars In Emerging Technologies</h3>
            <p>CoSSMO is currently looking for experts in the following emerging technologies:</p>

            <h5>Change Detection Techniques</h5>
            <p>These are sophisticated statistical algorithms for computers to process various data from automatic sensors and trigger “intelligent” decisions as to whether there is a change in regime that should be cause for alarms or serious adjustments. Applications of these techniques can have unprecedented success from computer vision, to anticipation of financial crises, to climate change.</p>

            <h5>Data Analytics</h5>
            <p>Massive processing of statistical data that allows computers to discover patterns and act “intelligently”. Most notably, the recent success of the IBM Watson algorithms exemplifies the power that such methodologies will acquire in our immediate future.</p>

            <h5>Evolutionary Optimization Algorithms</h5>
            <p>Techniques for optimization of large complex systems have recently been proposed that mimic the manner in which genetic mutations succeed in natural selection, and others mimic the manner in which animal colonies (notably ants and bees) communicate simple individual directives in order to produce a coherent behavior that results in intelligent actions with purpose that goes beyond what each individual can grasp.</p>

            <h3>Affiliated Member</h3>
            <p>Any Faculty member at CUNY can be affiliated with the Institute. Affiliated members must contribute towards the mission of CoSSMO, usually in the form of collaboration in a project. All supervisors of active student members are also affiliated members. To apply for membership, identify one or more projects in either outreach, research or education that you wish to supervise or co-supervise. You may either join a current program or suggest a new one.</p>
            <p>It is expected that within your first year you will submit at least one research grant or research contract through CoSSMO and that you attend and contribute to our seminars regularly.</p>
            <p>Memberships will be granted by the EC and will be subject to revision every three years.</p><br />

            <b>Resident Scholars in Emerging Technologies will be hired either:</b>
            <ul>
              <li>As regular Research Fellowships funded by research grants or private sources.</li>
              <li>Visitors on Sabbatical from their institutions (national and international) whose stay will be funded by seeking special collaborative grants or who bring their own funding.</li>
              <li>Invited CUNY professors on teaching release from their college, upon approval of the appointment by the Provost of the CUNY college where the affiliation of the professor is.</li>
            </ul>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/forms/UD5dXL86NSW8uAyH3"
            >
              <Button
                label="Apllication Form"
                raised
                primary
                style={{ width: '100%' }}
              />
            </a>
          </Tab>
          <Tab label="Students">
            Under Construction
          </Tab>
        </Tabs>
      </section>
    )
  }
}
