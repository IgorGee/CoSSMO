import React from 'react'

import Navigation from '../Navigation'
import Footer from '../Footer'

const App = props => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export default App
