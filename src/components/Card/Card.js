import React from 'react'
import './Card.scss'
import noFav from '../../noFav.svg'
import fav from '../../fav.svg'



const Card = ({name, homeworld, species, language, population, topic}) => {

  return (
    <article className="Card-wrapper">
      <h3>Name: <span>{name}</span><img src={noFav} alt="favorite" /></h3>

      <p>HomeWorld: <span>{homeworld}</span></p>
      <p>Species: <span>{species}</span></p>
      <p>Language: <span>{language}</span></p>
      <p>Population: <span>{population}</span></p>
    </article>
  )
}

export default Card