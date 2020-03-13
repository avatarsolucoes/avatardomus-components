import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from '../setupEnzyme';
import { BoxCenter } from '..';

describe('BoxCenter', () => {
  it('is truthy', () => {
    expect(BoxCenter).toBeTruthy();
  });

  it('Test renderer without children', () => {
    const wrapper = shallow(<BoxCenter className="test" />);
    expect(wrapper.exists('.test')).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Test renderer whith children', () => {
    const wrapper = shallow(<BoxCenter>TESTE</BoxCenter>).html();
    expect(wrapper).toMatchSnapshot();
  });
});
