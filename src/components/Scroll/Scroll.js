import React from 'react';
import './Scroll.scss'
import PropTypes from 'prop-types'

const Scroll = ( { filmText } ) => {
  const {title, episode, releaseDate, openingCrawl, header} = filmText
  let romanNumerals = ["I", "II","III", "IV", "V", "VI", "VII" ]
  let numeral = romanNumerals[episode - 1]
return (
  <article className="Scroll-article">
    <p className="Scroll-galaxy-text">{header}</p>
      <div className="filmtext-wrapper-before">
        <div className="filmtext-wrapper-after">
          <h1>{title}</h1>
          <h2>Episode: {numeral}</h2>
          <h4>Date: {releaseDate}</h4>
          <h5>{openingCrawl}</h5>
        </div>
      </div>
  </article>
)
}

Scroll.propTypes = {
  filmText: PropTypes.object
}

export default Scroll