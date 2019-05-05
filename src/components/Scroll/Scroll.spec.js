import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

const mockProp = {
  title: "Revenge of the Sith",
  releaseDate: "2005-05-19",
  openingCrawl: "War! The Republic is crumbling"
}


describe('Scroll', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper = shallow(<Scroll filmText={mockProp}/>)
  });

  it('should render correctly', () =>{
    expect(wrapper).toMatchSnapshot()
  })
});