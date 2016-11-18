import React from 'react'

import Field from './Field/'
import s from './styles.scss'

const computerSimulation = ["Virtual Reality", "Experimentation", "Simulation Methods", "Dimension Reduction"]
const optimization = ["Decision Making", "Control of Dynamic Processes", "Machine Learning", "Evolutionary Computing"]
const stochasticModelling= ["Markov Chains", "Markov Processes", "Financial Modelling"]

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
