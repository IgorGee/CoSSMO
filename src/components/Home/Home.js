import React from 'react'

import Field from './Field/'
import s from './styles.scss'
import { topics as Images } from '../../images'

const computerSimulation = [
  { name: 'Virtual Reality', image: Images.vrLens },
  { name: 'Experimentation', image: Images.cups },
  { name: 'Simulation Methods', image: Images.virus },
  { name: 'Dimension Reduction', image: Images.fractal }
]
const optimization = [
  { name: 'Decision Making', image: Images.chess },
  { name: 'Control of Dynamic Processes', image: Images.circuitBoard },
  { name: 'Machine Learning', image: Images.head },
  { name: 'Evolutionary Computing', image: Images.dna }
]
const stochasticModelling = [
  { name: 'Markov Chains', image: Images.font },
  { name: 'Markov Processes', image: Images.menger },
  { name: 'Financial Modelling', image: Images.business }
]

const academicDisciplines = [
  { name: 'Mathematics', image: Images.math },
  { name: 'Computer Science', image: Images.board },
  { name: 'Statistics', image: Images.analysis },
  { name: 'Applied Mathematics', image: Images.spaceship },
  { name: 'Geography', image: Images.cartography },
  { name: 'Business', image: Images.dollar },
  { name: 'Economics', image: Images.socialMedia },
  { name: 'Engineering', image: Images.railway },
]

const Home = () => (
  <main className={s.root}>
    <Field name="Computer Simulation" topics={computerSimulation} />
    <Field name="Optimization" topics={optimization} />
    <Field name="Stochastic Modelling" topics={stochasticModelling} />
    <Field name="Academic Disciplines" topics={academicDisciplines} disciplines />
  </main>
)

export default Home
