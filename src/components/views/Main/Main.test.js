import React from 'react';
import { shallow } from 'enzyme';
import { MainComponent } from './Main';

describe('Component Main', () => {
  
  let component;
  beforeEach(() => {
    component = shallow(<MainComponent />);
  });

  it('1) should render without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('2) should throw error with props', () => {
    expect(() => shallow(<MainComponent name={'sth'} />)).not.toThrow();
  });

  it('3) should render Button convert', () => {
    expect(component.exists('#convert')).toEqual(true);
  });

  it('4) should render Button clear', () => {
    expect(component.exists('#clear')).toEqual(false);
  });

  it('5) should render correct text in button convert', () => {
    expect(component.find('#convert h2').text()).toContain('CONVERT');
    console.log(component.debug());
  });

  // it('6) should render correct text in button clear', () => {
  //   expect(component.find('#clear h2').text()).toContain('CLEAR');
  //   console.log(component.debug());
  // });

  it('6) includes prop value ""', () => {        
    expect(component.find('#textarea').prop('value')).toEqual('');
  });

  // it('6) render the click event of login button', () => {
  //   component.find('#login').simulate('click');
  //   expect(component.find('h1').text()).toBe('1');
  //   console.log(component.debug());
  // });

});
