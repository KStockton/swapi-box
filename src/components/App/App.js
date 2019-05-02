import React, { Component } from 'react';
import { filmInfo, getSpecies, fetchData, getHomeWorld, onlyPeople } from './AppHelper'
import Scroll from '../Scroll/Scroll.js'
import logo from '../../logo.svg';
import './_App.scss';
import Controls from '../Controls/Controls'



export default class App extends Component {
  constructor(){
    super()

  this.state = {
    filmText: {},
    isLoading: true,
    category: '',
    starWarPeople: [],
    vehicles: '',
    planets: ''
  }
}


componentDidMount = () => {
  const filmNumber = Math.floor(Math.random() * 7) + 1
  const url = `https://swapi.co/api/films/${filmNumber}/`
  fetch(url)
  .then(response => response.json())
  .then(result => filmInfo(result))
  .then(filmText => this.setState(
    { 
      filmText,
      isLoading: false 
    }))
  .catch(error => console.log(error))

}


handleCategory = event => {
  let category = event.target.name
  let result = this.handleFetch(category)
  this.setState({category})
}

handleFetch(usercategory){

  switch(usercategory) {
    case 'people':
      this.getPeople();
      break;
    case 'vehicles':
      this.getVehicles()
      break;
    case 'planets':
      this.getPlanets()
      break;
    default: return null
  }
}

getPeople = () => {
  fetchData('people/')
  .then(characters => getSpecies(characters.results))
  .then(charactersData => getHomeWorld(charactersData))
  .then(peopleResult => {
      let starWarPeople = onlyPeople(peopleResult)
      this.setState({starWarPeople})
    })
   
  
}

getPlanets(){

}

getVehicles(){

}



render() {
console.log(this.state.starWarPeople)
  
  let initialDisplay
  if(this.state.isLoading){

   initialDisplay = 
    <section>
      <img src={logo} className="App-logo" alt="logo"/>
      <h3>Loading have faith...</h3>
    </section>

  } else {
    initialDisplay = <Scroll filmText={this.state.filmText} />
  } 
  return (
    <div className="App">
      <header className="App-header">
        {initialDisplay}
        <Controls handleCategory={this.handleCategory}/>
      </header>
    </div>
  );
  }
}
