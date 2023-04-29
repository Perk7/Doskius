import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header/Header'
import "./Tracks.sass"
import { getTracks, tracks, artists } from '../../database'

export default function Tracks() {

  return (
    <>
    <Header back />
    <section className="tracks__list">
        {getTracks(Object.keys(tracks)).map(id =>
        {
          const artist_list = tracks[id].artists.map(e => artists[e].name)
          return (
          <div className="tracks__item" key={id}>
              <Link className='tracks__item__link-block' to={`/track/${id}`}>
                  <img src={`/Doskius/Tracks/${tracks[id].icon}`} alt="" className="tracks__item__icon" />
                  <span className="tracks__item__title">{tracks[id].title}</span>
                  <span className="tracks__item__artists">{artist_list.join(' & ')}</span>
              </Link>
          </div>
          )
        }
        )}
    </section>
    </>
  )
}
