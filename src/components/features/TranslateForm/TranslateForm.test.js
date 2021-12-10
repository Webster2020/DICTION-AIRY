import React from 'react';
import { shallow } from 'enzyme';
import { TranslateFormComponent } from './TranslateForm';

describe('Component TranslateForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<TranslateFormComponent />);
    expect(component).toBeTruthy();
  });
});
