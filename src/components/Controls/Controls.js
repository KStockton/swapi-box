import React from 'react';
import './Controls.scss';
import PropTypes from 'prop-types'

const Controls = (props) => {
  return(
    <section className="Controls-wrapper">
      <h1>Swapi-Box</h1>
      <button className="Controls-btn people" name="people" onClick={props.handleCategory}>
        People
      </button>
      <button className="Controls-btn planets" name="planets" onClick={props.handleCategory}>
        Planets
      </button>
      <button  className="Controls-btn vehicles" name="vehicles" onClick={props.handleCategory}>
        Vehicles
      </button>
    </section>
  )
  }

  Controls.propTypes = {
    handleCategory: PropTypes.func
  }

export default Controls