import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './Header';

describe('Component Header', () => {

  let component;
  beforeEach(() => {
    component = shallow(<HeaderComponent />);
  });

  it('should render without crashing', () => {
    // const component = shallow(<HeaderComponent />);
    expect(component).toBeTruthy();
  });

  it('should render correct title', () => {
    // const component = shallow(<HeaderComponent />);
    expect(component.find('h1').text()).toContain('DICTIONAIRY');
    console.log(component.debug());
  });
  
  it('includes link to /', () => {        
    expect(component.find('Link').prop('to')).toEqual('/');
  });

});


//67042304222 16.12 19:30
