import React from 'react';
import './Controls.scss';

const Controls = (props) => {
  return(
    <section className="Controls-wrapper">
      <h1>Swapi-Box</h1>
      <button className="Controls-btn" name="people" onClick={props.handleCategory}>
        People
      </button>
      <button className="Controls-btn" name="planets" onClick={props.handleCategory}>
        Planets
      </button>
      <button  className="Controls-btn" name="vehicles" onClick={props.handleCategory}>
        Vehicles
      </button>
    </section>
  )
  
  }

export default Controls