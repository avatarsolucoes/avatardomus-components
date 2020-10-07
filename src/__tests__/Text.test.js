import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { Text } from '../Texts';

function RenderText() {
  const [t, setT] = useState('Text here');

  const handleClick = () => {
    setT('click');
  };

  const handleDoubleClick = () => {
    setT('double click');
  };
  return (
    <Text bold onClick={handleClick} onDoubleClick={handleDoubleClick} className="text1">
      {t}
    </Text>
  );
}

describe('Teste Text', () => {
  it(`is truthy Span`, () => {
    expect(Text).toBeTruthy();
  });

  it(`Test prop bold`, () => {
    const wrapper = {
      text: renderer.create(<Text text="test span" bold />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test shallow html`, () => {
    const wrapper = shallow(<Text text="test span" />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`Test Text with children`, () => {
    const wrapper = mount(<RenderText />);
    wrapper
      .find('.text1')
      .at(1)
      .simulate('click');
    wrapper.update();
    wrapper
      .find('.text1')
      .at(1)
      .simulate('doubleClick');
    wrapper.update();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
