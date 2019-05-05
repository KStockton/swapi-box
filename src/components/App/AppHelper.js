function filmInfo(randomFilm) {
  const userFilm = {
    openingCrawl: randomFilm.opening_crawl,
    title: randomFilm.title,
    releaseDate: randomFilm.release_date
  }
  return userFilm
}

function fetchData(urlText){
  let url 

  if(urlText === 'people/'){
    url = `https:/swapi.co/api/${urlText}`
  } else {
    url = urlText
  }
  return fetch(url)
    .then(response => {
      if(!response.ok){
        throw Error('Error fetching data')
      } else {
        return response.json()
      }
})
}

function getSpecies(characters){
  const completeSpeciesPromise = characters.map(character =>{
    return fetchData(character.species[0])         
           .then(species => ({...character, species}))
  })
  return Promise.all(completeSpeciesPromise)
}

 function getHomeWorld(characterBios){

  const homeWorld = characterBios.map(bio => {
    return fetchData(bio.homeworld)
           .then(homeworlds => ({name: bio.name, homeworld: homeworlds.name, population: homeworlds.population, species: bio.species.name, language: bio.species.language }))
  })
  return Promise.all(homeWorld)
}


export {
  getHomeWorld,
  getSpecies,
  fetchData,
  filmInfo
}
