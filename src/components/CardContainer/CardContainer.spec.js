import React from 'react';
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';

const mockProp = [
  {
    homeworld: "Tatooine",
    language: "Galactic Basic",
    name: "Luke Skywalker",
    population: "200000",
    species: "Human"
  }, {
    homeworld: "Tatooine",
    language: "n/a",
    name: "C-3PO",
    population: "200000",
    species: "Droid"
  }
];

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer category={mockProp}/>);
  });

  it('should render correctly without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});