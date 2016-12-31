// @flow
import React from 'react'
import { Tab, Tabs } from 'react-toolbox'

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
            <small>First Content</small>
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
