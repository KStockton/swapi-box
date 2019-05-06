import React from 'react'
import './Card.scss'
import noFav from '../../noFav.svg'
import fav from '../../fav.svg'



const Card = ({name, homeworld, species, language, population, topic}) => {

  return (
    <article className="Card-wrapper">
      <h3 className="Card-info name"><span className="Card-text">Name:</span> {name}<img src={noFav} alt="favorite" /></h3>

      <p className="Card-info"><span className="Card-text">Homeworld:</span> {homeworld}</p>
      <p className="Card-info"><span className="Card-text">Species:</span> {species}</p>
      <p className="Card-info"><span className="Card-text">Language:</span> {language}</p>
      <p className="Card-info"><span className="Card-text">Population:</span> {population}</p>
    </article>
  )
}

export default Card