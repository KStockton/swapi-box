import React, { Component } from 'react';
import { getSpecies, fetchData, getHomeWorld, getResidents} from './AppHelper.js'
import Scroll from '../Scroll/Scroll.js'
import logo from '../../logo.svg';
import './_App.scss';
import Controls from '../Controls/Controls.js'
import CardContainer from '../CardContainer/CardContainer.js'
// import Favorites from '../Favorites/Favorites'

export default class App extends Component {
  constructor(){
    super()

  this.state = {
    filmText: {},
    isLoading: true,
    category: '',
    people: [],
    vehicles: [],
    planets: [],
    error: ''
  }
}

componentDidMount = () => {
  const filmNumber = Math.floor(Math.random() * 7) + 1
  const url = `https://swapi.co/api/films/${filmNumber}/`
  return fetchData(url)
  .then(result => {
    const filmText = {
      openingCrawl: result.opening_crawl,
      title: result.title,
      releaseDate: result.release_date,
      episode: result.episode_id,
      header: `from a galaxy far far away`
    }
    this.setState({ 
          filmText,
          isLoading: false
        })
  })
  .catch(error => this.setState({error}))

}

handleCategory = name => {
  // const { name } = event.target
  // let category = event.target.name
  this.handleFetch(name)
  this.setState({category: name})
}

handleFetch(usercategory){
  switch(usercategory) {
    case 'people':
      console.log('yes')
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
  this.setState({isLoading: !this.state.isLoading})
  return fetchData('people/')
  .then(characters => getSpecies(characters.results))
  .then(charactersData => getHomeWorld(charactersData))
  .then(people => this.setState({ people, isLoading: false}))
  .catch(error => this.setState({error}))
}

getPlanets(){
  this.setState({isLoading: true })
  const url = `https://swapi.co/api/planets/`
  return fetchData(url)
  .then(planets => getResidents(planets.results))
  .then(planets => this.setState({ planets, isLoading: false}))
  .catch(error => this.setState({error}))
}

getVehicles(){
  this.setState({isLoading: true})
  const url = `https://swapi.co/api/vehicles/`
  return fetchData(url)
  .then(result => result.results.map(vehicle => {
    return { 
      name: vehicle.name, 
      passengers: vehicle.passengers,
      vehicleClass: vehicle.vehicle_class, 
      model: vehicle.model
    }
  }
))

  .then(vehicles => this.setState({vehicles, isLoading: false}))
}

render() {
  const { category } = this.state
  // const categoryStatus = this.state.category === ''
  let initialDisplay
  if(this.state.isLoading)
   initialDisplay = 
                  <section>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h5>Loading have faith...</h5>
                  </section>
 
  return (
    <div className="App">
      <header className="App-header">
        <Controls handleCategory={this.handleCategory}/>
        {initialDisplay}
        {/* <Favorites /> */}
      </header>
      { category === '' ? 
        <Scroll filmText={this.state.filmText} /> : 
        <CardContainer category={this.state[this.state.category]} topic={this.state.category}/> 
      }
      <footer>
      </footer>
    </div>
  );
  }
}
