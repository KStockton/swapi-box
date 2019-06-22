import React from 'react';
import './Controls.scss';
import planets from '../../DeathStar.svg'
import PropTypes from 'prop-types';
import trooper from '../../Stroop.svg';
import falcon from '../../Falcon.svg';


const Controls = (props) => {
  
  return(
    <section className="Controls-wrapper">
      <h1 className="title">Swapi-Box</h1>
      <button className="Controls-btn people" name='people' onClick={() => props.handleCategory('people')}>
      <div className="vehicles-wrapper">
        <img src={trooper} alt="star-trooper"/>
        People
        </div>
      </button>
      <button className="Controls-btn planets" name='planets' onClick={() => props.handleCategory('planets')}>
      <div className="vehicles-wrapper">
        <img src={planets} alt="deathstar"/>
        Planets
        </div>
      </button>
      <button  className="Controls-btn vehicles" name='vehicles' onClick={() => props.handleCategory('vehicles')}>
        <div className="vehicles-wrapper">
          <img src={falcon} alt="falcon"/>
            Vehicles
        </div>
      </button>
    </section>
  )
  }

  Controls.propTypes = {
    handleCategory: PropTypes.func
  }

export default Controls