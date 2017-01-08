// @flow
import React from 'react'
import { Link } from 'react-router'
import { AppBar } from 'react-toolbox/lib/app_bar'
import { Button } from 'react-toolbox/lib/button'
import RTBNavigation from 'react-toolbox/lib/navigation'
import theme from './theme.scss'

const pages = [
  { link: '/', title: 'Home' },
  { link: 'projects', title: 'Projects' },
  { link: 'events', title: 'Events' },
  { link: 'publications', title: 'Publications' },
  { link: 'opportunities', title: 'Opportunities' },
  { link: 'about', title: 'About' }
]

const Navigation = () => {
  const navigationButtons = pages.map((page, index) => (
    <Link to={page.link} key={index}><Button theme={theme} label={page.title} /></Link>
  ))

  return (
    <AppBar theme={theme}>
      <Link to="/" >
        <img
          src="../../images/Logos/CoSSMOLogo.svg"
          role="presentation"
        />
      </Link>
      <RTBNavigation theme={theme}>
        {navigationButtons}
      </RTBNavigation>
    </AppBar>
  )
}

export default Navigation
