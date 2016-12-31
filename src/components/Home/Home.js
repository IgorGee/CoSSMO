// @flow
import React from 'react'

import Field from './Field/'
import s from './styles.scss'
import { topics as Images } from '../../images'

const computerSimulation = [
  { name: 'Virtual Reality', image: Images.vrLens, link: 'https://en.wikipedia.org/wiki/Virtual_reality' },
  { name: 'Experimentation', image: Images.cups, link: 'https://en.wikipedia.org/wiki/Computer_experiment' },
  { name: 'Simulation Methods', image: Images.virus, link: 'https://en.wikipedia.org/wiki/Simulation' },
  { name: 'Dimension Reduction', image: Images.fractal, link: 'https://en.wikipedia.org/wiki/Dimensionality_reduction' }
]
const optimization = [
  { name: 'Decision Making', image: Images.chess, link: 'https://en.wikipedia.org/wiki/Decision_support_system' },
  { name: 'Control of Dynamic Processes', image: Images.circuitBoard, link: 'https://en.wikipedia.org/wiki/Dynamical_system' },
  { name: 'Machine Learning', image: Images.head, link: 'https://en.wikipedia.org/wiki/Machine_learning' },
  { name: 'Evolutionary Computing', image: Images.dna, link: 'https://en.wikipedia.org/wiki/Evolutionary_computation' }
]
const stochasticModelling = [
  { name: 'Markov Chains', image: Images.font, link: 'https://en.wikipedia.org/wiki/Markov_chain' },
  { name: 'Markov Processes', image: Images.menger, link: 'https://en.wikipedia.org/wiki/Markov_chain' },
  { name: 'Financial Modelling', image: Images.business, link: 'https://en.wikipedia.org/wiki/Financial_modeling' }
]

const academicDisciplines = [
  { name: 'Mathematics', image: Images.math, link: 'https://en.wikipedia.org/wiki/Mathematics' },
  { name: 'Computer Science', image: Images.board, link: 'https://en.wikipedia.org/wiki/Computer_science' },
  { name: 'Statistics', image: Images.analysis, link: 'https://en.wikipedia.org/wiki/Statistics' },
  { name: 'Applied Mathematics', image: Images.spaceship, link: 'https://en.wikipedia.org/wiki/Applied_mathematics' },
  { name: 'Geography', image: Images.cartography, link: 'https://en.wikipedia.org/wiki/Geography' },
  { name: 'Business', image: Images.dollar, link: 'https://en.wikipedia.org/wiki/Business' },
  { name: 'Economics', image: Images.socialMedia, link: 'https://en.wikipedia.org/wiki/Economics' },
  { name: 'Engineering', image: Images.railway, link: 'https://en.wikipedia.org/wiki/Engineering' },
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
