import React from 'react'
import logoImage from '../toppng.com-naruto-logo-400x250.png'

function Header() {
  return (
    <header className="App-header">
        <img src={logoImage} alt="naruto" />
    </header>
  )
}

export default Header