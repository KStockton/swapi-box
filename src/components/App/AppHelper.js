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
  return Promise.all(homeWorld)
}

 


