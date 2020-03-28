/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
// import { renderHook } from '@testing-library/react-hooks';

import { shallow, mount } from 'enzyme';

import { ToolsBar, ToolButton, ToolItem, ToolLink, ItemTitle, ItemButtons, ToolSelectItem } from '..';

const daysOptions = [
  { id: 10, title: '10 dias' },
  { id: 30, title: '30 dias' },
  { id: 60, title: '60 dias' },
  { id: 90, title: '90 dias' },
];

describe('TableDiv', () => {
  it('is truthy', () => {
    expect(ToolsBar).toBeTruthy();
    expect(ToolButton).toBeTruthy();
    expect(ToolItem).toBeTruthy();
    expect(ToolLink).toBeTruthy();
  });

  it('Test ToolSelectItem', () => {
    const wrapper = mount(
      <ToolsBar line>
        <ItemTitle>My Test</ItemTitle>
        <ToolSelectItem defaultOptions={daysOptions} name="lastDays" placeholder="test" defaultValue={10} />
      </ToolsBar>
    );
    wrapper
      .find('option')
      .at(0)
      .instance().selected = false;
    wrapper
      .find('option')
      .at(1)
      .instance().selected = true;
    wrapper.find('select').simulate('change', { target: { value: '30' } }).update();
    expect(wrapper.html()).toMatchSnapshot();

    const tree = renderer.create(<ToolSelectItem defaultOptions={daysOptions} name="lastDays" value={10} />);
    tree.update();
  });

  it('Test TableDiv renderer whith children', () => {
    const wrapper = shallow(
        <ToolsBar line>
          <ItemTitle text="My test" />
          <ItemTitle>Teste title</ItemTitle>
          <ItemButtons>
            <ToolButton icon="del" value={1} disabled />
            <ToolButton icon="update" />
            <ToolLink icon="add" value="https://avatarsolucoesdigitais.com.br" />
            <ToolLink icon="add" value="https://avatarsolucoesdigitais.com.br" disabled />
          </ItemButtons>
        </ToolsBar>
    );

    expect(wrapper.html()).toMatchSnapshot();
  });
});
