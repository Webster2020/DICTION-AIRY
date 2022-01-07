import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { FiltersFormComponent } from './FiltersForm';

describe('Component FiltersForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><FiltersFormComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
