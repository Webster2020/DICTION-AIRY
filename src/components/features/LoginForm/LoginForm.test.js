import React from 'react';
import { shallow } from 'enzyme';
import { LoginFormComponent } from './LoginForm';

describe('Component LoginForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<LoginFormComponent />);
    expect(component).toBeTruthy();
  });
});
