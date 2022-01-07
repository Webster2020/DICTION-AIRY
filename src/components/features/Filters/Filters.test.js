import React from 'react';
import { shallow } from 'enzyme';
import { FiltersComponent } from './Filters';

describe('Component Filters', () => {
  it('should render without crashing', () => {
    const component = shallow(<FiltersComponent />);
    expect(component).toBeTruthy();
  });
});
