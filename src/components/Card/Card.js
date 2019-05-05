import React from 'react'
import './Card.scss'

const Card = ({name, homeworld, species, language, population}) => {

  return (
    <article className="Card-wrapper">
      <h1>Name: {name}</h1>
      <h2>HomeWorld: {homeworld}</h2>
      <h2>Species: {species}</h2>
      <h2>Language: {language}</h2>
      <h2>Population:{population}</h2>
    </article>
  )
}

export default Card