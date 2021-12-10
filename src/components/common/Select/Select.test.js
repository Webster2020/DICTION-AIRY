import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { SelectComponent } from './Select';

describe('Component Select', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><SelectComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
