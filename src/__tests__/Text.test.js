import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Text } from '../Texts';

describe('Span', () => {
  it(`is truthy Span`, () => {
    expect(Text).toBeTruthy();
  });

  it(`Test Span`, () => {
    const wrapper = {
      text: renderer.create(<Text text="test span" />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test shallow`, () => {
    const wrapper = shallow(<Text text="test span" />);
    expect(wrapper).toMatchSnapshot();
  });
});
