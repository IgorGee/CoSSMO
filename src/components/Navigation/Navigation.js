import React from 'react'
import { Link } from 'react-router'
import { AppBar } from 'react-toolbox/lib/app_bar'
import { Button } from 'react-toolbox/lib/button'
import RTBNavigation from 'react-toolbox/lib/navigation'
import theme from './theme.scss'

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
      <Link to={page.link} key={index}><Button theme={theme} label={page.title}></Button></Link>
    )
  })

  return (
    <AppBar theme={theme} leftIcon="CoSSMO">
      <RTBNavigation theme={theme}>
        {navigationButtons}
      </RTBNavigation>
    </AppBar>
  )
}

export default Navigation
