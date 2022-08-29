import React from 'react';
import './Card.scss';
import noFav from '../../assests/noFav.svg';
// import fav from '../../assests/fav.svg';
import PropTypes from 'prop-types';



const Card = ({
  name, homeworld, species, language, population, 
  terrain, climate, residents, model, vehicleClass, 
  passengers, topic}) => {

  let card;

  if (topic === 'people') {
    card = <article className="Card-wrapper">
      <h3 className="Card-info name">
        <span className="Card-text">Name:</span> {name}<img src={noFav} alt="favorite" />
      </h3>
      <p className="Card-info"><span className="Card-text">Homeworld:</span> {homeworld}</p>
      <p className="Card-info"><span className="Card-text">Species:</span> {species}</p>
      <p className="Card-info"><span className="Card-text">Language:</span> {language}</p>
      <p className="Card-info"><span className="Card-text">Population:</span> {population}</p>
    </article>;
  } else if (topic === 'planets') {
    card = <article className="Card-wrapper">
      <h3 className="Card-info name">
        <span className="Card-text">Name:</span> {name}<img src={noFav} alt="favorite" />
      </h3>
      <p className="Card-info"><span className="Card-text">Terrain:</span> {terrain}</p>
      <p className="Card-info"><span className="Card-text">Population:</span> {population}</p>
      <p className="Card-info"><span className="Card-text">Climate:</span> {climate}</p>
      <p className="Card-info"><span className="Card-text">Residents:</span> {residents}</p>
    </article>;
  } else {
    card = <article className="Card-wrapper">
      <h3 className="Card-info name">
        <span className="Card-text">Name:</span> {name}<img src={noFav} alt="favorite" />
      </h3>
      <p className="Card-info"><span className="Card-text">Model:</span> {model}</p>
      <p className="Card-info"><span className="Card-text">Class:</span> {vehicleClass}</p>
      <p className="Card-info"><span className="Card-text">Passengers:</span> {passengers}</p>
    </article>;
  }

  return (
    <div>
      {card}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  language: PropTypes.string,
  topic: PropTypes.string
};

export default Card;