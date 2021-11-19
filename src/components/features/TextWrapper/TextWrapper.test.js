import React from 'react';
import { shallow } from 'enzyme';
import { TextWrapperComponent } from './TextWrapper';

describe('Component TextWrapper', () => {
  it('should render without crashing', () => {
    const component = shallow(<TextWrapperComponent />);
    expect(component).toBeTruthy();
  });
});
