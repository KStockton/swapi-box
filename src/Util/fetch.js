function fetchData(urlText) {
  let url;
  if (urlText === 'people/') {
    url = `https:/swapi.dev/api/${urlText}`;
  } else {
    url = urlText;
  }
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching data');
      } else {
        return response.json();
      }
    });
}

function getSpecies(characters) {
  const completeSpeciesPromise = characters.map(character =>{
    return fetchData(character.species[0])         
      .then(species => ({...character, species}));
  });
  // const result = Promise.all(completeSpeciesPromise);
  console.log(completeSpeciesPromise);
}

function getHomeWorld(characterBios) {
  console.log(characterBios);
  const homeWorld = characterBios.map(bio => {
    return fetchData(bio.homeworld)
      .then(homeworlds => ({
        name: bio.name, 
        homeworld: homeworlds.name, 
        population: homeworlds.population, 
        species: bio.species.name, 
        language: bio.species.language }));
  });
  console.log(homeWorld);
  return Promise.all(homeWorld);
}

function getResidents(planets) {
  const residents = planets.map(residentOnly => {
 
    if (residentOnly.residents.length > 0) {
      for (let i = 0; i < residentOnly.residents.length; i++) {
        return fetchData(residentOnly.residents[i])
          .then(results => (
            {
              name: residentOnly.name, 
              terrain: residentOnly.terrain, 
              population: residentOnly.population, 
              climate: residentOnly.climate, 
              residents: results.name
            })
          )
        ;
      } 
    } else {
      return {
        name: residentOnly.name, 
        terrain: residentOnly.terrain, 
        population: residentOnly.population, 
        climate: residentOnly.climate, 
        residents: `NA`
      };
    }
  });
  return Promise.all(residents);
}


export {
  getHomeWorld,
  getSpecies,
  fetchData,
  getResidents,
};
