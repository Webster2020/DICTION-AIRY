import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../../../utils/testUtils';
import { ButtonComponent } from './Button';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<ButtonComponent {...props} />);
};

describe('Component Button', () => {

  test('1) should render without crashing', () => {
    const component = setup();
    expect(component).toBeTruthy();
    
    console.log('Component Button: 1) should render without crashing', '\n\n', component.debug());
  });

  test('2) should render button as "a" without any props', () => {
    const component = setup({});
    const element = findByTestAttr(component, 'a');
    expect(element.length).toBe(1);

    console.log('Component Button: 2) should render button as "a" without any props', '\n\n', component.debug());
  });

  test('3) should render button as "button" when "link" prop is true', () => {
    const component = setup({link: true});
    const element = findByTestAttr(component, 'button');
    expect(element.length).toBe(1);

    console.log('Component Button: 3) should render button as "button" when "link" prop is true', '\n\n', component.debug());
  });

  test('4) should render button as "div" when "main" prop is true', () => {
    const component = setup({main: true});
    const element = findByTestAttr(component, 'div');
    expect(element.length).toBe(1);

    console.log('Component Button: 4) should render button as "div" when "main" prop is true', '\n\n', component.debug());
  });

  test('5) should render button without any props with class "default"', () => {
    const component = setup({});
    const element = findByTestAttr(component, 'a');
    expect(element.hasClass('default')).toEqual(true);

    console.log('Component Button: 5) should render button without any props with class "default"', '\n\n', component.debug());
  });

});
