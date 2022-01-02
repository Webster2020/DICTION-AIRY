import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { WordsComponent } from './Words';

describe('Component Words', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><WordsComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
