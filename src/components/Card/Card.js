import React from 'react'
import './Card.scss'

const Card = ({name, homewolrd, species, language, population}) => {

  return (
    <article className="Card-wrapper">
      <h1>{name}</h1>
      <h1>{homewolrd}</h1>
      <h1>{species}</h1>
      <h1>{language}</h1>
      <h1>{population}</h1>
    </article>
  )
}

export default Card