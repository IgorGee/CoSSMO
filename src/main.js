import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Projects from './components/Projects'
import Events from './components/Events'
import Publications from './components/Publications'
import Presentations from './components/Presentations'
import Opportunities from './components/Opportunities'
import About from './components/About'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="projects" component={Projects}/>
      <Route path="events" component={Events}/>
      <Route path="publications" component={Publications}/>
      <Route path="presentations" component={Presentations}/>
      <Route path="opportunities" component={Opportunities}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
  , document.getElementById('root'))
