import React from 'react'

import Field from './Field/'
import s from './styles.scss'
import { topics as Images } from '../../images'

const computerSimulation = [
  { name: "Virtual Reality", image: Images.vrLens },
  { name: "Experimentation", image: Images.cups },
  { name: "Simulation Methods", image: Images.virus },
  { name: "Dimension Reduction", image: Images.fractal }
]
const optimization = [
  { name: "Decision Making", image: Images.chess },
  { name: "Control of Dynamic Processes", image: Images.circuitBoard },
  { name: "Machine Learning", image: Images.head },
  { name: "Evolutionary Computing", image: Images.dna }
]
const stochasticModelling= [
  { name: "Markov Chains", image: Images.font },
  { name: "Markov Processes", image: Images.menger },
  { name: "Financial Modelling", image: Images.business }
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
