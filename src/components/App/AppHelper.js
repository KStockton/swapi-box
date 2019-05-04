export function filmInfo(randomFilm) {
  const userFilm = {
    openingCrawl: randomFilm.opening_crawl,
    title: randomFilm.title,
    releaseDate: randomFilm.release_date
  }
  return userFilm
}

export function fetchData(urlText){
  return fetch(`https:/swapi.co/api/${urlText}`)
    .then(response => {
      if(!response.ok){
        throw Error('Error fetching data')
      } else {
        return response.json()
      }
})
}

export function getSpecies(characters){
  const completeSpeciesPromise = characters.map(character =>{
    return fetch(character.species)
           .then(response => response.json())
           .then(species => ({...character, species}))
  })
  return Promise.all(completeSpeciesPromise)
}

export function getHomeWorld(characterBios){
  console.log(characterBios)
  const homeWorld = characterBios.map(bio => {
    return fetch(bio.homeworld)
           .then(response => response.json())
           
           .then(homeworld => ({...bio, homeworld}))
  })
  console.log('home',homeWorld)
  return Promise.all(homeWorld)
}

export function onlyPeople(peoples) {
  let allPeople = peoples.map(people =>{
    return({ name: people.name, 
             homeworld: people.homeworld.name,
             species: people.species.name,
             language: people.species.language,
             population: people.homeworld.population
      }
    )
  })
  return allPeople
}

 


