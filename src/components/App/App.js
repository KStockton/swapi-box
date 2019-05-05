import React, { Component } from 'react';
import { getSpecies, fetchData, getHomeWorld} from './AppHelper.js'
import Scroll from '../Scroll/Scroll.js'
import logo from '../../logo.svg';
import './_App.scss';
import Controls from '../Controls/Controls.js'
import CardContainer from '../CardContainer/CardContainer.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class App extends Component {
  constructor(){
    super()

  this.state = {
    filmText: {},
    isLoading: true,
    category: '',
    people: [],
    vehicles: '',
    planets: ''
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
  .catch(error => console.log(error))

}


handleCategory = event => {
  let category = event.target.name
  this.setState({category})
  this.handleFetch(category)
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
  this.setState({isLoading: !this.state.isLoading})
  return fetchData('people/')
  .then(characters => getSpecies(characters.results))
  .then(charactersData => getHomeWorld(charactersData))
  .then(people => this.setState({ people, isLoading: false}))
}

getPlanets(){
this.setState({isLoading: !this.state.isLoading})
return fetchData('')
}

getVehicles(){

}



render() {
  console.log(this.state.filmText)

  const categoryStatus = this.state.category === ''
  
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
      </header>

      {categoryStatus ? <Scroll filmText={this.state.filmText} />: 
      <CSSTransition
      in={this.state.isLoading}
      appear={true}
      timeout={600}
      classNames="fade"
      >
      
      <CardContainer category={this.state[this.state.category]}/> 
      </CSSTransition>
      }
      <footer>
      {initialDisplay}

      </footer>
    </div>
  );
  }
}
