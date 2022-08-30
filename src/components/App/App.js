import React, { Component } from 'react';
import {  fetchData, getResidents} from '../../Util/fetch.js';
import Scroll from '../Scroll/Scroll.js';
import logo from '../../assests/logo.svg';
import './_App.scss';
import Controls from '../Controls/Controls.js';
import CardContainer from '../CardContainer/CardContainer.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filmText: {},
      isLoading: true,
      category: '',
      people: [],
      vehicles: [],
      planets: [],
      error: ''
    };
  }

  componentDidMount = () => {
    const filmNumber = Math.floor(Math.random() * 7) + 1;
    const url = `https://swapi.dev/api/films/${filmNumber}/`;
    return fetchData(url)
      .then(result => {
        const filmText = {
          openingCrawl: result.opening_crawl,
          title: result.title,
          releaseDate: result.release_date,
          episode: result.episode_id,
          header: `from a galaxy far far away`
        };
        this.setState({ 
          filmText,
          isLoading: false
        });
      })
      .catch(error => this.setState({error}));
  };

  handleCategory = name => {
    this.handleFetch(name);
    this.setState({category: name});
  };

  handleFetch(usercategory) {

    switch (usercategory) {
    case 'vehicles':
      this.getVehicles();
      break;
    case 'planets':
      this.getPlanets();
      break;
    default: return null;
    } 
  }


  getPlanets = () => {
    this.setState({isLoading: true });

    const url = `https://swapi.dev/api/planets/`;

    return fetchData(url)
      .then(planets => getResidents(planets.results))
      .then(planets => this.setState({ planets, isLoading: false}))
      .catch(error => this.setState({error}));
  };

  getVehicles() {
    this.setState({isLoading: true});

    const url = `https://swapi.dev/api/vehicles/`;
  
    return fetchData(url)
      .then(result => result.results.map(vehicle => {
        return { 
          name: vehicle.name, 
          passengers: vehicle.passengers,
          vehicleClass: vehicle.vehicle_class, 
          model: vehicle.model
        };
      }
      ))
      .then(vehicles => this.setState({vehicles, isLoading: false}));
  }

  render() {
    const { category } = this.state;
    let initialDisplay;

    if (this.state.isLoading) {
      initialDisplay = 
      <section>
        <img src={logo} className="App-logo" alt="logo"/>
        <h5>Loading have faith...</h5>
      </section>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <Controls handleCategory={this.handleCategory}/>
          {initialDisplay}
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
