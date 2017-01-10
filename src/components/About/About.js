// @flow
import React from 'react'
import { Tabs, Tab } from 'react-toolbox'

import s from './styles.scss'

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
          <Tab label="Our People">
            People
          </Tab>
          <Tab label="Our Mission">
            <h3>Mission</h3>
            <ul>
              <li>Identify potential projects and participants across CUNY and in the community at large.</li>
              <li>Help members identify sources of funding and to prepare grant applications.</li>
              <li>Facilitate the execution of the projects, providing advice, space, and computer facilities.</li>
              <li>Create research programs by aggregating multiple projects with common defining factors. Such programs will promote interactions and networking that will increase the value of the research activities with respect to the contribution of individual projects.</li>
              <li>Manage program projects with core competencies.</li>
              <li>Establish collaborations outside of CUNY, both national and international.</li>
            </ul>

            <h3>Goals</h3>
            <p>CoSSMO will seek to increase the synergy among research, education and outreach. The Institute will aim to integrate academic excellence and service to the public and private sectors of society. It will address problems better solved applying stochastic modeling, computer simulation and/or optimization.</p>
            <p>The operational structure of the Institute will promote research outputs, and it will help create new educational material. It will promote collaborations with the public and private sectors through cross learning and networking, with less work required of the members than working on their own.</p>
            <img
              src="../../images/misc/super-linear-growth.png"
              alt="Super Linear Growth"
              width="800px"
            />

            <h3>Academic Purpose</h3>
            <ul>
              <li>Provide graduate and undergraduate students an experience that will enhance skills that are important for the workforce, in addition to the experience of conducting research in teams. In simple terms, to provide students with theoretical and fundamental insights supporting the application of computer simulation and optimization to solve real problems within a collegial environment.</li>
              <li>Increase productive research collaborations between CUNY faculty and colleagues, nationally and internationally.</li>
              <li>Create pedagogical material and case studies available to all CUNY faculty and students suitable for undergraduates.</li>
              <li>Increase and promote higher research output and knowledge transfer by identifying common features in the mathematical models of current programs and potential new projects.</li>
            </ul>

            <div>
              <div>
                <h4>The ORE Principle</h4>
                <ul>
                  <li>Work with companies to apply mathematical models and simulation to solve problems.</li>
                  <li>Provide students with real problems that need solution in the public and private sectors.</li>
                  <li>Help students with critical thinking.</li>
                  <li>Foster multidisciplinary research.</li>
                  <li>Create new research opportunities.</li>
                </ul>
              </div>
              <img
                src="../../images/misc/ore-building-bridges.png"
                alt="ORE Building Bridges"
                width="300px"
              />
            </div>

            <h4>Outreach</h4>
            <p>Beyond the usual collaborative projects with industry, we envision projects that help develop mathematical and computer skills needed in the workplace. Each project will be validated through the endorsement from industrial partners and/or the Advisory Board.</p>

            <h4>Research</h4>
            <p>The Institute aims to establish a synergy of research and grant activity between the various colleges at CUNY and outside, focusing on all areas of the application of stochastic modeling, simulation and optimization. It will be very important to implement the Institute's operations so that different Departments and Faculty members benefit from cooperation, and that they should not compete for resources within the Institute.</p>

            <h4>Education</h4>
            <p>The research projects will foster interactions among students, faculty and industry members. Projects will be used to create pedagogical material as "case studies", made available throughout CUNY. Material gathered in this manner may be incorporated for training courses. Student internships at partner companies or government sectors and workshops at the Institute for the partner companies and government agencies will be promoted as well.</p>
          </Tab>
          <Tab label="Our Lab">
            Lab
          </Tab>
        </Tabs>
      </section>
    )
  }
}
