import React from 'react';
import { shallow } from 'enzyme';
import { TextAreaComponent } from './TextArea';

describe('Component TextArea', () => {
  it('should render without crashing', () => {
    const component = shallow(<TextAreaComponent />);
    expect(component).toBeTruthy();
  });
});
