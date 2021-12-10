import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { TextConvertedComponent } from './TextConverted';

describe('Component TextConverted', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><TextConvertedComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
