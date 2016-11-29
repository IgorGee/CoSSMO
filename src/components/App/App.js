// @flow
import React from 'react'

import Navigation from '../Navigation'
import Footer from '../Footer'

import s from './styles.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Navigation />
        <main className={s.content}>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}
