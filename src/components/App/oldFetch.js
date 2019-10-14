// this.setState({ isLoading: !this.state.isLoading})
// fetchData('https://swapi.co/api/people/')
//  .then(data => data.results.map(person => {
//    const personSpeciesInfo = fetchData(...person.species)
//  .then(species =>  ({ species: species.name, language: species.language}))
//    const personHomeworld = fetchData(person.homeworld)
//  .then(homeworld => ({ homeworld: homeworld.name, population: homeworld.population}))
//    Promise.all([personSpeciesInfo, personHomeworld])
//  .then(personInfo =>{
//      let people = [{...personInfo[0], ...personInfo[1], name: person.name}]
//      this.setState({people})
//      return people
//    })
//  }
//  )
//  )
// }

// function fetchData(url){
//   return fetch(url)
//     .then(response => {
//       if(!response.ok){
//         throw Error('Error fetching data')
//       } else {
//         return response.json()
//       }
// })
// }