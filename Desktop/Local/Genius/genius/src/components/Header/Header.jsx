import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './Header.sass';

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <>
    <div className='header__container'>
    {props.back && <button className="header__back-btn" onClick={() => navigate(-1)}>{'<'} Back</button> }
    <header className={props.back ? "header__block header__block_back" : "header__block"}>
        <Link to={'/'}>
            <img className='header__logo' src="/Doskius/Header/logo.png" alt="" />
        </Link> 
    </header>
    </div>
    <div className="header__notea"></div>
    </>
  )
}
