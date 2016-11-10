import React from 'react'

import CunyLogo from './CunyLogo'
import s from './styles.scss'

const Footer = props => {
  return (
    <footer className={s.footer}>
      <span>Footer</span>
      <CunyLogo className={s.logo}/>
    </footer>
  )
}

export default Footer
