import React from 'react';
import { shallow } from 'enzyme';
import { MainComponent } from './Main';

describe('Component Main', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainComponent />);
    expect(component).toBeTruthy();
  });
});
