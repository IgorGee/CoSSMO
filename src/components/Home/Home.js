import React from 'react'

import Field from './Field/'
import s from './styles.scss'
import Images from '../../images'

const image = Images.traffic

const computerSimulation = [
  { name: "Virtual Reality", image },
  { name: "Experimentation", image },
  { name: "Simulation Methods", image },
  { name: "Dimension Reduction", image }
]
const optimization = [
  { name: "Decision Making", image },
  { name: "Control of Dynamic Processes", image },
  { name: "Machine Learning", image },
  { name: "Evolutionary Computing", image }
]
const stochasticModelling= [
  { name: "Markov Chains", image },
  { name: "Markov Processes", image },
  { name: "Financial Modelling", image }
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
