import React from 'react';

const Scroll = ( { filmText } ) => {
  // console.log('hi', title)
return (
  <article>
    <h1>{filmText.title}</h1>
    <h4>{filmText.releaseDate}</h4>
    <h5>{filmText.openingCrawl}</h5>
  </article>
)
}

export default Scroll