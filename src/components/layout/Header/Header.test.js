import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { HeaderComponent } from './Header';

describe('Component Header', () => {

  let component;
  beforeEach(() => {
    component = shallow(<MemoryRouter><HeaderComponent /></MemoryRouter>);
    // component = shallow(<HeaderComponent />);
  });

  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });

  // it('should render correct text', () => {
  //   expect(component.find('h1').text()).toContain('DICTIONAIRY');
  //   console.log(component.debug());
  // });
  
  // it('includes link to /', () => {        
  //   expect(component.find('Link').prop('to')).toEqual('/');
  // });

});
