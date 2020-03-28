import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { Tab, Tabs } from '../Tabs';

function RenderTabs() {
  return (
    <Tabs defaultActiveIndex={1}>
      <Tab label="A" key={`tab${1}`} onClick={() => {}}>
        A
      </Tab>
      <Tab label="B" key={`tab${2}`}>
        B
      </Tab>
      <Tab key={`tab${3}`}>C</Tab>
    </Tabs>
  );
}

function RenderTab() {
  return (
    <Tabs>
      <Tab
        label="A1"
        key={`tab${1}`}
        onClickTab={() => {
          console.log('test');
        }}
      >
        A1
      </Tab>
    </Tabs>
  );
}

describe('test Tabs', () => {
  it(`is truthy Span`, () => {
    expect(Tabs).toBeTruthy();
    expect(Tab).toBeTruthy();
  });

  it(`Test Span`, () => {
    const wrapper = {
      text: renderer.create(<Tabs />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });

  it('should show App click', () => {
    const wrapper = mount(<RenderTabs />);
    wrapper
      .find('.tabs__tab-link')
      .at(1)
      .simulate('click');
    wrapper.update();
    wrapper
      .find('.tabs__tab-link')
      .at(0)
      .simulate('click');
    wrapper.update();
    wrapper
      .find('.tabs__tab-link')
      .at(2)
      .simulate('click');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test shallow `, () => {
    const wrapper = shallow(<RenderTab />).html();
    expect(wrapper).toMatchSnapshot();
  });
});
