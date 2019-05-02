import React, { Component } from 'react';

class Controls extends Component {



  // handleClick = (event) =>{
  //   const { name } = event.target
  //    console.log(event.target.name)
  //   this.setState({})
  // }
  
  
  render() {
    console.log(this.state)
  return(
    <section>
      <h1>Swapi-Box</h1>
      <button name="people" onClick={this.handleClick}>People</button>
      <button name="planets" onClick={this.handleClick}>Planets</button>
      <button name="vehicles" onClick={this.handleClick}>Vehicles</button>
    </section>
  )
  }
  }

export default Controls