import React from 'react';
import { shallow } from 'enzyme';
import { HomeComponent } from './Home';

describe('Component Home', () => {
  
  let component;
  beforeEach(() => {
    component = shallow(<HomeComponent />);
  });

  it('1) should render without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('2) should throw error with props', () => {
    expect(() => shallow(<HomeComponent name={'sth'} />)).not.toThrow();
  });

  it('3) should render Button Try Free', () => {
    expect(component.exists('#tryfree')).toEqual(true);
  });

  it('4) should render Button Login', () => {
    expect(component.exists('#login')).toEqual(true);
  });

  it('5) should render correct title', () => {
    expect(component.find('#main h2').text()).toContain('TRY FREE');
    console.log(component.debug());
  });

  it('6) includes link to "/main"', () => {        
    expect(component.find('#main').prop('to')).toEqual('/main');
  });

  it('7) render the click event of login button', () => {
    component.find('#login').simulate('click');
    expect(component.find('h1').text()).toBe('1');
    console.log(component.debug());
  });

  it('8) useState mock false', () => {
    const myInitialState = false;
    React.useState = jest.fn().mockReturnValue([myInitialState, {}]);
    expect(component.exists('LoginForm')).toEqual(false);
  });

});
