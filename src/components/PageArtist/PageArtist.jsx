import React from 'react'
import Header from '../Header/Header'
import { useParams, Link } from 'react-router-dom';
import './PageArtist.sass'
import { artists, tracks, getTracks } from '../../database';

export default function PageArtist() {
  const params = useParams();
  const object = artists[params.id];

  return (
    <>
    <Header back />
    <section className="page-artist__container">
        <div className="page-artist__photo">
            <img src={`../Artists/${object.avatar}.jpg`} alt={`Avatar ${object.name}`} />
            <span>{object.name}</span>
        </div>
        <div className="page-artist__tracks">
            <span className="page-artist__main-title">Tracks</span>
            {getTracks(object.tracks).map(e => 
                <div className='page-artist__track' key={e}>
                    <Link className='page-artist__track__link-block' to={`/track/${e}`}>
                        <img src={`../Tracks/${tracks[e].icon}`} alt={`Track ${tracks[e].name} icon`} className="page-artist__track__icon" />
                        <span className="page-artist__track__title">{tracks[e].title}</span>
                    </Link>
                </div>
            )}
        </div>
    </section>
    </>
  )
}
