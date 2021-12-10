import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { TranslatePanelComponent } from './TranslatePanel';

describe('Component TranslatePanel', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><TranslatePanelComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
