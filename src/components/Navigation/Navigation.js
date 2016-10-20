import React from 'react'
import { Link } from 'react-router'

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
            <Link to={page.link} key={index}>{page.title}</Link>
        )
    })

    return (
        <div>{navigationButtons}</div>
    )
}

export default Navigation
