import {
getHomeWorld,
getSpecies,
fetchData,
getResidents
} from './AppHelper.js'

describe('fetchData', () => {
  
const mockFilm = {
  title: 'The Empire Strikes Back',
  releaseDate: '1980-05-17',
  openingCrawl: 'Although the Death'
}
  beforeAll(()=> {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilm)
    });
  });
})
  
  it('should be called fetch with the correct params', ()=>{
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
})
  describe('GetSpecies', () =>{

    let mockCharacter 
    let mockSpecies 
  
    beforeAll(() =>{
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
    it('should return a array object with species object', async ()=>{
      const mockPromise = 
      [{
        "name": "Luke Skywalker",
        "species": 
        {
          "name": "Human"
        }
      }]
      const result = await getSpecies(mockCharacter);
      expect(result).toEqual(mockPromise)
    })
    it('should return an error if the status is not ok', async() => {
      window.fetch = jest.fn().mockImplementation(() =>{
        return Promise.resolve({
          ok: false
        })
      })
      await expect(getSpecies(mockCharacter)).rejects.toEqual(Error('Error fetching data'))
    })
  })

  describe('GetHomeWorld', () => {
    let mockCharacterBio
    let mockHomeworld
    beforeEach(() => {

      mockCharacterBio = [{
        "name": "Luke Skywalker",
        "species": {
          "name": "Human",
          "language": "English"
        },
        "homeworld": "https://swapi.co/api/planets/1/"
      }]

      mockHomeworld = {
        "name": "Tatooine",
        "population": "200000"
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockHomeworld)
      })
    })
  })
    it('should call fetch with the correct params', () => {
      getHomeWorld(mockCharacterBio)
      expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/planets/1/")
    })
    it('should return an error if the status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() =>{
        return Promise.resolve({
          ok: false
        })
      })
      await expect(getHomeWorld(mockCharacterBio)).rejects.toEqual(Error('Error fetching data'))
    })
    it('should return an array object with the homeworld information', async () => {
      let mockHomeworldPromise =  [{
        "name": "Luke Skywalker",
        "species": "Human",
        "language": "English",
        "homeworld": "Tatooine",
        "population": "200000"
      }]
      const result = await getHomeWorld(mockCharacterBio) 
      expect(result).toEqual(mockHomeworldPromise)
    })
  })
describe('GetResidents', () => {
  let mockPlanet
  let mockResident
  beforeEach(() =>{
    mockResident = {
      "name": "Wakanda",
    }

   mockPlanet = [
          {
              "name": "Alderaan",
              "population": "2000000000",
              "residents": [
                  "https://swapi.co/api/people/5/"
              ] 
          }
      ]
    
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResident)
      })
    })
  })
  it('should be called with the correct', () =>{
    getResidents(mockPlanet)
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/people/5/")
  })
  it('should return an error if the status is no ok', async () =>{
    window.fetch = jest.fn().mockImplementation(()=>{
      return Promise.resolve({
        ok: false,
      })
    })
    await expect(getResidents(mockPlanet)).rejects.toEqual(Error('Error fetching data'))
  })
  it('should return a promise when passed a resident', async () => {

    const mockPlanet1 = [
      {
        "name": "Alderaan",
        "terrain": "flat",
        "population": "2000000000",
        "climate": "temperate",
        "residents": [
          "https://swapi.co/api/people/5/"
        ] 
      }
    ]
    const mockPromise = [
      {
        "name": "Alderaan",
        "terrain": "flat",
        "population": "2000000000",
        "climate": "temperate", 
        "residents": "Wakanda"
      }
    ]
    const result = await getResidents(mockPlanet1)
    expect(result).toEqual(mockPromise)
    })
    it.skip('should return resident if array had no url', () =>{
      const mockNoResident =  [
        {
        "name": "Michael KS",
        "terrain": "flat",
        "population": "1",
        "climate": "temperate", 
        "residents": [ ]
      }]
      

      expect(getResidents(mockNoResident.residents)).toContain("NA")
    })
})



