import React from 'react';
import { shallow } from 'enzyme';
import { TitleComponent } from './Title';

describe('Component Title', () => {
  it('should render without crashing', () => {
    const component = shallow(<TitleComponent />);
    expect(component).toBeTruthy();
  });
  it('should render correct title', () => {
    const expectedTitle = 'example title';
    const component = shallow(<TitleComponent title={expectedTitle}/>);
    expect(component.find('.title').text()).toEqual(expectedTitle);
    console.log(component.debug());
  });
});
