import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { TranslatePanelComponent } from './TranslatePanel';
// import { TranslateForm } from '../TranslateForm/TranslateForm';

describe('Component TranslatePanel', () => {

  it('1) should render without crashing', () => {
    const component = shallow((<MemoryRouter><TranslatePanelComponent /></MemoryRouter>));
    expect(component).toBeTruthy();
  });

  it('2) should throw error without props', () => {
    expect(() => shallow(<TranslatePanelComponent />)).toThrow();
  });

  it('3) should have correct h2', () => {
    const component = shallow((<TranslatePanelComponent word={'one'}/>));
    expect(component.find('h2').text()).toContain('ONE');
    console.log(component.debug());
  });

});
