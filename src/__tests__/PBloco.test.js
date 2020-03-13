import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from '../../setupEnzyme';

import { PBloco } from '../Texts';

describe('PBloco', () => {
  it(`is truthy PBloco`, () => {
    expect(PBloco).toBeTruthy();
  });

  it(`Test PBloco`, () => {
    const wrapper = {
      line: renderer.create(<PBloco line>CHILDREN</PBloco>).toJSON(),
      bloco: renderer.create(<PBloco right>CHILDREN</PBloco>).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });
});
