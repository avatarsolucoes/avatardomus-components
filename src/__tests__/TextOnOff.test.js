import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from '../../setupEnzyme';

import { TextOnOff, TextOff, TextOn } from '../Texts';

describe('TextOnOff', () => {
  it(`is truthy TextOnOff`, () => {
    expect(TextOnOff).toBeTruthy();
  });

  it(`Test TextOnOff`, () => {
    const wrapper = {
      textOff: renderer.create(<TextOnOff text="test nota" />).toJSON(),
      textOn: renderer.create(<TextOnOff text="test nota" online />).toJSON(),
      childOn: renderer.create(<TextOnOff online>CHILDREN</TextOnOff>).toJSON(),
      childOff: renderer.create(<TextOnOff>CHILDREN</TextOnOff>).toJSON(),
      empty: renderer.create(<TextOnOff />).toJSON(),
      props: renderer.create(<TextOnOff style={{ fontSize: 12 }} bold />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TextOn', () => {
  it(`is truthy TextOn`, () => {
    expect(TextOn).toBeTruthy();
  });

  it(`Test TextOn`, () => {
    const wrapper = {
      textOff: renderer.create(<TextOn text="test TextOn" />).toJSON(),
      textOn: renderer.create(<TextOn text="test TextOn" online />).toJSON(),
      childOn: renderer.create(<TextOn online>CHILDREN</TextOn>).toJSON(),
      childOff: renderer.create(<TextOn>CHILDREN</TextOn>).toJSON(),
      empty: renderer.create(<TextOn />).toJSON(),
      props: renderer.create(<TextOn style={{ fontSize: 12 }} bold />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TextOff', () => {
  it(`is truthy TextOff`, () => {
    expect(TextOff).toBeTruthy();
  });

  it(`Test TextOff`, () => {
    const wrapper = {
      textOff: renderer.create(<TextOff text="test TextOff" />).toJSON(),
      textOn: renderer.create(<TextOff text="test TextOff" online />).toJSON(),
      childOn: renderer.create(<TextOff online>CHILDREN</TextOff>).toJSON(),
      childOff: renderer.create(<TextOff>CHILDREN</TextOff>).toJSON(),
      empty: renderer.create(<TextOff />).toJSON(),
      props: renderer.create(<TextOff style={{ fontSize: 12 }} bold />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });
});
