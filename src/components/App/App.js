import React, { Component } from 'react';
import logo from '../../logo.svg';
import './_App.scss';



export default class App extends Component {
  constructor(){
    super()

  this.state = {
    filmText: '',
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
  .then(filmText => 
    console.log({title: filmText.title, openingCrawl: filmText.opening_crawl, }))
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}
