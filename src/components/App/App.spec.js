import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const mockHandleFetch = jest.fn();

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />); 
  });
  it('should match the snatpshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
    
  it('should have a default state', () => {
    const defaultState = {
      filmText: {},
      error: '',
      isLoading: true,
      category: '',
      people: [],
      vehicles: [],
      planets: []
    };
    expect(wrapper.state()).toEqual(defaultState);
  });
    
  it('should update state when handleCategory is called', () => {
    const event = { target: { name: 'people'}};
    wrapper.instance().handleCategory(event);
    expect(wrapper.state('category')).toEqual('people');
  });

  it('should render is loading if the isLoading is true', () => {
    wrapper.setState({isLoading: true});
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Scroll component when the category is an empty string', () => {
    wrapper.setState({category: ""});
    expect(wrapper).toMatchSnapshot();
  });

  xit('should call handleFetch when handleCategory is invoked', () => {
    let mockEvent = { target: { name: 'people'}};
    wrapper.instance().handleCategory(mockEvent);
    expect(mockHandleFetch).toBeCalled();
  });
    
});


