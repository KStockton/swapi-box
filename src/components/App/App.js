import React, { Component } from 'react';
import { filmInfo } from './AppHelper'
import Scroll from '../Scroll/Scroll.js'
import logo from '../../logo.svg';
import './_App.scss';



export default class App extends Component {
  constructor(){
    super()

  this.state = {
    filmText: {},
    isLoading: true
  }
}

randomFilm () {
  const num = Math.floor(Math.random() * 7) + 1
  return num
}

componentDidMount = () => {
  const filmNumber = this.randomFilm() 

  const url = `https://swapi.co/api/films/${filmNumber}/`
  fetch(url)
  .then(response => response.json())
  .then(result => filmInfo(result))
  .then(filmText => this.setState({ filmText,
  isLoading: false }))
  .catch(error => console.log(error))

}

render() {
  console.log(this.state.filmText)
  let initialDisplay
  if(this.state.isLoading){
   initialDisplay =  <section>
     <img src={logo} className="App-logo" alt="logo"/>
    <h3>Loading...</h3>
     </section>
  } else {
    initialDisplay = <Scroll filmText={this.state.filmText} />
  }
  return (
    <div className="App">
      <header className="App-header">
        {initialDisplay}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
  }
}
