import React from 'react'

import Navigation from '../Navigation'
import Footer from '../Footer'

import 'react-toolbox/lib/commons.scss';
import s from './styles.scss'

const App = props => {
  return (
    <div className={s.root}>
      <Navigation />
      <main className={s.content}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default App
