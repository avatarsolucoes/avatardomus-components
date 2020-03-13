import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from '../../setupEnzyme';

import { Span } from '../Texts';

describe('Span', () => {
  it(`is truthy Span`, () => {
    expect(Span).toBeTruthy();
  });

  it(`Test Span`, () => {
    const wrapper = {
      text: renderer.create(<Span text="test span" />).toJSON(),
      child: renderer.create(<Span>CHILDREN</Span>).toJSON(),
      size: renderer.create(<Span text="test span" size={16} />).toJSON(),
      strong: renderer.create(<Span text="test span" strong />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });
});
