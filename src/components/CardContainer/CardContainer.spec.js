import React from 'react'
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';

const mockProp = [{
  name: 'Luke Skywalker',
  
}]

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer />)
  })

  it('should render correctly without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

})