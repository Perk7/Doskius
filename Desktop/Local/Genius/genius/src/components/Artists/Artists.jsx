import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import "./Artists.sass"
import { artists } from '../../database'

export default function Artists() {
  return (
    <>
    <Header back />
    <section className="artists__list">
        {Object.keys(artists).map(id =>
        <Link to={`/artist/${id}`} style={{'backgroundImage': `url(/Doskius/Artists/${artists[id].avatar}.jpeg)`}} className="artists__item" key={id}>
            <span>{artists[id].name}</span>
            <div className={`mic${id}`} style={+id === 3 ? {'backgroundImage': 'url(icons/nick_mic.png)'} : {}}></div>
        </Link>
        )}
    </section>
    </>
  )
}
