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
  it('should return an error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>{
      return Promise.resolve({
        ok: false
      })
    })
    await expect(fetchData()).rejects.toEqual(Error('Error fetching data'))
  })

  describe('GetSpecies', () =>{

    let mockCharacter 
    let mockSpecies 
  
    beforeEach(() =>{
      mockSpecies = {
        "name": "Human"
      }

      mockCharacter = [
        {
          "name": "Luke Skywalker",
          "species": ["https://swapi.co/api/species/1/"]
        }]
        
      window.fetch= jest.fn().mockImplementation(() =>{
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSpecies)
        })
      })
    })
    it('Should call fetch with the correct params', () =>{
      getSpecies(mockCharacter)
      expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/species/1/")
    })
    it.skip('should return a parsed response if status is ok', async ()=>{
      const result = await getSpecies(mockCharacter);
    expect(result).toEqual(mockCharacter)
    })
    it.skip('should return species when correct params are passed', async() => {
      getSpecies(mockCharacter)
    })
  })
  
  })



