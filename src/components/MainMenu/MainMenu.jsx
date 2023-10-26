import React from 'react'

import Header from '../Header/Header'
import NavBlock from '../NavBlock/NavBlock'
import './MainMenu.sass'

export default function MainMenu() {
  return (
    <div className='main__container'>
        <Header/>
        <NavBlock/>
    </div>
  )
}
