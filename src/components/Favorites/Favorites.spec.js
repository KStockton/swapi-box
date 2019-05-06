import React from 'react';
import Favorites from './Favorites';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Favorites', () =>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Favorites />)
  })
  it('Expect component to render without crashing', () =>{
    expect(wrapper).toMatchSnapshot()
  })
})