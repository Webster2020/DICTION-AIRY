import React from 'react';
import { shallow } from 'enzyme';
import { WordsListComponent } from './WordsList';

describe('Component WordsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<WordsListComponent />);
    expect(component).toBeTruthy();
  });
});
