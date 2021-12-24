import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/testUtils';
import { InputComponent } from './Input';

const setup = (props={}) => {
  return shallow(<InputComponent {...props} />);
};

describe('Component Input', () => {

  test('1) should render without crashing', () => {
    const component = setup();
    expect(component).toBeTruthy();
    
    console.log('Component Input: 1) should render without crashing', '\n\n', component.debug());
  });

  test('2) should render Input as "input" without any props', () => {
    const component = setup({});
    const element = findByTestAttr(component, 'input');
    expect(element.length).toBe(1);

    console.log('Component Input: 2) should render Input as "input" without any props', '\n\n', component.debug());
  });

  test('3) should render Input without any props with class "mainInput"', () => {
    const component = setup({});
    const element = findByTestAttr(component, 'input');
    expect(element.hasClass('mainInput')).toEqual(true);

    console.log('Component Input: 3) should render Input without any props with class "mainInput"', '\n\n', component.debug());
  });

  test('4) should render Input with prop "variant=word" with class "word"', () => {
    const component = setup({variant: 'word'});
    const element = findByTestAttr(component, 'input');
    expect(element.hasClass('word')).toEqual(true);

    console.log('Component Input: 4) should render Input with prop "variant=word" with class "word"', '\n\n', component.debug());
  });

});
