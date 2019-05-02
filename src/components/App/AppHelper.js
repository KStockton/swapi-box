export function filmInfo(randomFilm) {
  const userFilm = {
    openingCrawl: randomFilm.opening_crawl,
    title: randomFilm.title,
    releaseDate: randomFilm.release_date
  }
  return userFilm
}

// export function getPeople(){
//   const people = fetch('https:/swapi.co/api/people')
//   .then(response => response.json())

// Promise.all(people.results)
  
// }

// switch() {
//   case 'film':
//     urlSwitch('film/');
//     break;
//   case 'people':
//     urlSwitch('people/')
//     break;
//   case 'planets':
//     urlSwitch('planets/')
//     break;
// }


// function urlSwitch(url){
//   const apiFetch = `https://swapi.co/api/${url}`
//   return apiFetch
// }

// export function fetchData(url){
//   const apiFetch = fetch(url)
//   .then(response => response.json())

  
//   .then(data => data)
// }


// Promise.all([people, species, planet])
// .then(data => this.setState({
//   people: people,
//   species: species,
//   planet: planet
// })