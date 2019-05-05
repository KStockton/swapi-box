import React from 'react'
import {getHomeWorld,
getSpecies,
fetchData,
filmInfo
} from './AppHelper.js'

describe('fetchData', () => {
  
const mockFilm = {
  title: 'The Empire Strikes Back',
  releaseDate: '1980-05-17',
  openingCrawl: 'Although the Death'
}
  beforeEach(()=> {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilm)
    });
  });
})
  
  it('should be call fetch with the correct params', ()=>{
    const filmNumber = 1
    const mockUrl = `https://swapi.co/api/films/${filmNumber}/`
    fetchData(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/1/')
  })
  it('should return a parsed response if status is ok', async () => {
    const filmNumber = 1
    const mockUrl = `https://swapi.co/api/films/${filmNumber}/`
    const result = await fetchData(mockUrl);
    expect(result).toEqual(mockFilm) 
  })
  it('should return an error if stats is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>{
      return Promise.resolve({
        ok: false
      })
    })
    await expect(fetchData()).rejects.toEqual(Error('Error fetching data'))
  })

  describe('GetSpecies', () =>{

    const mockCharacterSpecies =   {
      "name": "Luke Skywalker",
      "homeworld": "https://swapi.co/api/planets/1/",
      "films": [
        "https://swapi.co/api/films/2/",
      ],
      "species": [
        "https://swapi.co/api/species/1/"
      ],
      "vehicles": [
        "https://swapi.co/api/vehicles/14/",
      ]
    }
    beforeEach(() =>{
      window.fetch= jest.fn().mockImplementation(() =>{
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve()
        })
      })
    })
    it('Should call fetch with the correct params', () =>{
      fetchData(mockCharacterSpecies.species[0])
      expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/species/1/")
    })
    it('should return a pared response if status is ok', async ()=>{
      const result = await fetchData(mockCharacterSpecies[0]);
    expect(result).toEqual(mockCharacterSpecies[0])
    })
  })
  
  })



