import React from 'react'
import { Link } from 'react-router-dom'
import './NavBlock.sass'

export default function NavBlock() {
  return (
    <nav className="navblock__container">
        <div className="navblock__item">
            <Link className='navblock__item__link' to={'artists'}><span>Artists</span></Link>
        </div>
        <div className="navblock__item">
            <Link className='navblock__item__link' to={'tracks'}><span>Tracks</span></Link>
        </div>
    </nav>
  )
}
