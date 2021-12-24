import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { findByTestAttr } from '../../../utils/testUtils';
import { SelectComponent } from './Select';

const setupMemory = (props={}) => {
  return shallow(<MemoryRouter><SelectComponent {...props} /></MemoryRouter>);
};

const setup = (props={}) => {
  return shallow(<SelectComponent {...props} />);
};

describe('Component Select', () => {

  test('1) should render without crashing', () => {
    const component = setupMemory();
    expect(component).toBeTruthy();
    
    console.log('Component Select: 1) should render without crashing', '\n\n', component.debug());
  });

  test('2) should render Select as "select" without "option" props', () => {
    const component = setup({options: []});
    const element = findByTestAttr(component, 'select');
    expect(element.length).toBe(1);

    console.log('Component Select: 2) should render Select as "select" without any props', '\n\n', component.debug());
  });

});
