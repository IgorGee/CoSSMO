import React from 'react'

import CunyLogo from '../../images/Logos/CunyLogo'
import s from './styles.scss'

const Footer = props => {
  return (
    <footer className={s.footer}>
      <address>
        Hunter College <br/>
        North Building Room 1000 C <br/>
        695 Park Ave New York 10065 <br/>
        (212) 396-6751<br/>
        <a href="https://www.google.com/maps/place/Hunter+College/@40.7686792,-73.9669132,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258eb899f0889:0xb5e90aa7d877ee1f!8m2!3d40.7686792!4d-73.9647245">Google Maps</a>
      </address>
      <CunyLogo/>
    </footer>
  )
}

export default Footer
