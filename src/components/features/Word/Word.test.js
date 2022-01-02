import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { WordComponent } from './Word';

describe('Component Word', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><WordComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
