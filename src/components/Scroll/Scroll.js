import React from 'react';
import './Scroll.scss'
import PropTypes from 'prop-types'

const Scroll = ( { filmText } ) => {

return (
  <article className="Scroll-article">
    <p>From a galaxy far far away...</p>
      <div className="filmtext-wrapper-before">
        <div className="filmtext-wrapper-after">
          <h1>{filmText.title}</h1>
          <h4>{filmText.releaseDate}</h4>
          <h5>{filmText.openingCrawl}</h5>
        </div>
      </div>
  </article>
)
}

Scroll.propTypes = {
  filmText: PropTypes.object
}

export default Scroll