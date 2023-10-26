import React from 'react'

import Header from '../Header/Header'
import { useParams, Link } from 'react-router-dom';
import "./PageTrack.sass"
import { tracks, artists } from '../../database';

export default function PageTrack() {
  const params = useParams();
  const object = tracks[params.id];

  return (
    <>
    <Header back />
    <section className="track__container">
        <div className="track__main-block">
            <div className="track__title-block">
                <img src={`../Tracks/${object.icon}`} alt={`Track ${object.name} icon`} className="track__icon" />
                <span>{object.title}</span>
            </div>
            <div className="track__player-block">
                <audio src={`/Doskius/audio/${object.track}.mp3`} controls>Track</audio>
            </div>
            <div className="track__text-block">
                <pre>{object.text}</pre>
            </div>
        </div>
        <div className="track__artists-block">
            <span className="track__artists-title">Artists</span>
            <div className="track__artsist-list">
                {object.artists.map(e => 
                    <Link to={`/artist/${e}`} className="track__artist-item" key={e}>
                        <img src={`../Artists/${artists[e].avatar}_sm.jpeg`} alt={`Aritst ${artists[e].name} avatar`} />
                        <span>{artists[e].name}</span>
                    </Link>    
                )}
            </div>
        </div>
    </section>
    </>
  )
}
