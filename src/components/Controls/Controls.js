import React from 'react';
import './Controls.scss';
import planets from '../../assests/DeathStar.svg';
import PropTypes from 'prop-types';
import falcon from '../../assests/Falcon.svg';


const Controls = ({ handleCategory }) => {
  
  return (
    <section className="Controls-wrapper">
      <h1 className="title">Swapi-Box</h1>
      <button className="Controls-btn planets" name='planets' onClick={() => handleCategory('planets')}>
        <div className="vehicles-wrapper">
          <img src={planets} alt="deathstar"/>
        Planets
        </div>
      </button>
      <button  className="Controls-btn vehicles" name='vehicles' onClick={() => handleCategory('vehicles')}>
        <div className="vehicles-wrapper">
          <img src={falcon} alt="falcon"/>
            Vehicles
        </div>
      </button>
    </section>
  );
};

Controls.propTypes = {
  handleCategory: PropTypes.func
};

export default Controls;