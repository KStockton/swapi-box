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
  
  it('should be called with the correct params', ()=>{
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
  
  })