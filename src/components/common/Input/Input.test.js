import React from 'react';
import { shallow } from 'enzyme';
import { InputComponent } from './Input';

describe('Component Input', () => {
  it('should render without crashing', () => {
    const component = shallow(<InputComponent />);
    expect(component).toBeTruthy();
  });
});
