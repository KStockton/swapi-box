import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />
    )
  })
  it('should match the snatpshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    const defaultState = {
    filmText: {},
    isLoading: true,
    category: '',
    people: [],
    vehicles: '',
    planets: ''
    }
    expect(wrapper.state()).toEqual(defaultState)
  });
  
  it('can fetch', async () => {
    
  })

  // it('should render loading if isLoading is true', () =>{
  //   const load = wrapper.state('isLoading')
  // })
})


