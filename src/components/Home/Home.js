import React from 'react'

import Field from './Field/'
import s from './styles.scss'

const computerSimulation = [
  { name: "Virtual Reality", image: "images/traffic.png" },
  { name: "Experimentation", image: "images/traffic.png" },
  { name: "Simulation Methods", image: "images/traffic.png" },
  { name: "Dimension Reduction", image: "images/traffic.png" }
]
const optimization = [
  { name: "Decision Making", image: "images/traffic.png" },
  { name: "Control of Dynamic Processes", image: "images/traffic.png" },
  { name: "Machine Learning", image: "images/traffic.png" },
  { name: "Evolutionary Computing", image: "images/traffic.png" }
]
const stochasticModelling= [
  { name: "Markov Chains", image: "images/traffic.png" },
  { name: "Markov Processes", image: "images/traffic.png" },
  { name: "Financial Modelling", image: "images/traffic.png" }
]

const Home = props => {
  return (
    <main className={s.root}>
      <Field name="Computer Simulation" topics={computerSimulation} />
      <Field name="Optimization" topics={optimization} />
      <Field name="Stochastic Modelling" topics={stochasticModelling} />
    </main>
  )
}

export default Home
