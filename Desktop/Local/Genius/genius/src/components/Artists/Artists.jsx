import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import "./Artists.sass"
import { artists } from '../../database'

function interact(ev) {
  ev.currentTarget.style.transform = 'scale(1.05)'
  ev.currentTarget.style.transition = '0.1s'
}
function leave(ev) {
  ev.currentTarget.style.transform = 'scale(1)'
  ev.currentTarget.style.transition = '0.7s'
}
function fluid(ev) {
  
  let x = ((ev.currentTarget.offsetHeight+10)/2 - Math.abs(ev.pageX - ev.currentTarget.offsetLeft)) /40
  let y = ((ev.currentTarget.offsetWidth+10)/2 - Math.abs(ev.pageY - ev.currentTarget.offsetTop)) /40
  
  ev.currentTarget.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`
}

export default function Artists() {
  return (
    <>
    <Header back />
    <section className="artists__list">
        {Object.keys(artists).map(id =>
        <div className="artist__item" onMouseMove={ev => fluid(ev)} onMouseOver={ev => interact(ev) } onMouseLeave={ev => leave(ev) }>
          <Link to={`/artist/${id}`} className="artists__item__link" key={id}>
              <img src={`/Doskius/Artists/${artists[id].avatar}.jpeg`} alt={`Avatar ${artists[id].name}`} />
              <span>{artists[id].name}</span>
          </Link>
        </div>
        )}
    </section>
    </>
  )
}
