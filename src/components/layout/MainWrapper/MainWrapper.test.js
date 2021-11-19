import React from 'react';
import { shallow } from 'enzyme';
import { MainWrapperComponent } from './MainWrapper';

describe('Component MainWrapper', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainWrapperComponent />);
    expect(component).toBeTruthy();
  });
});
