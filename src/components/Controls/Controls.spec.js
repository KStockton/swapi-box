import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';

const mock_handleCategory = jest.fn();

describe('Controls', () =>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controls handleCategory={mock_handleCategory}/>);
  });

  it('Expect component to render without crashing', () =>{
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleCategory when any a button is clicked', () => {
    wrapper.find('.Controls-wrapper').childAt(1).simulate('click',  {target: { value: "people"}});
    expect(mock_handleCategory).toBeCalled();
  });
});