import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from '../../setupEnzyme';

import { Nota } from '../Texts';

describe('Nota', () => {
  it(`is truthy Span`, () => {
    expect(Nota).toBeTruthy();
  });

  it(`Test Nota`, () => {
    const wrapper = {
      text: renderer.create(<Nota text="test nota" style={{ fontSize: 12 }} />).toJSON(),
      child: renderer.create(<Nota inline>CHILDREN</Nota>).toJSON(),
      size: renderer.create(<Nota text="test nota" size={16} />).toJSON(),
      strong: renderer.create(<Nota text="test nota" strong />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });
});
