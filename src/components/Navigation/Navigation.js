import React from 'react'
import { Link } from 'react-router'
import { Button } from 'react-toolbox/lib/button';

const pages = [
  { link: '/', title: 'Home'},
  { link: 'projects', title: 'Projects'},
  { link: 'events', title: 'Events'},
  { link: 'publications', title: 'Publications'},
  { link: 'presentations', title: 'Presentations'},
  { link: 'opportunities', title: 'Opportunities'},
  { link: 'about', title: 'About'}
]

const Navigation = props => {

  const navigationButtons = pages.map((page, index) => {
    return (
      <Link to={page.link} key={index}><Button label={page.title}></Button></Link>
    )
  })

  return (
    <div>{navigationButtons}</div>
  )
}

export default Navigation
