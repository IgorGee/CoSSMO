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
          <Tab label="Presentations">
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
