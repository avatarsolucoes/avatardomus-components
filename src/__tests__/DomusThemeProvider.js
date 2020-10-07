import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { DomusThemeProvider, useTheme } from '../DomusThemeProvider';

function RenderChildren1() {
  const { theme } = useTheme();
  return <div style={{ backgroundColor: theme.primary }} />;
}

function RenderChildren2() {
  const { getTheme } = useTheme();
  const theme = getTheme();
  return <div style={{ backgroundColor: theme.secundary }} />;
}

function RenderChildren3() {
  const { getDefaultTheme } = useTheme();
  const theme = getDefaultTheme();
  return <div style={{ backgroundColor: theme.contrast }} />;
}

function RenderDomusThemeProvider() {
  return (
    <DomusThemeProvider>
      <RenderChildren1 />
      <RenderChildren2 />
      <RenderChildren3 />
    </DomusThemeProvider>
  );
}

describe('DomusThemeProvider', () => {
  it(`is truthy Span`, () => {
    expect(Text).toBeTruthy();
  });

  it(`Test renderer DomusThemeProvider`, () => {
    const wrapper = {
      text: renderer.create(<RenderDomusThemeProvider />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test shallow DomusThemeProvider`, () => {
    const wrapper = shallow(<RenderDomusThemeProvider />);
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test renderer Children`, () => {
    const wrapper = {
      a: renderer.create(<RenderChildren1 />).toJSON(),
      b: renderer.create(<RenderChildren2 />).toJSON(),
      c: renderer.create(<RenderChildren3 />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });
});
