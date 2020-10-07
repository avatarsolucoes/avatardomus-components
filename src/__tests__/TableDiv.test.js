import React from 'react';
import { shallow } from 'enzyme';
import { TableDiv, DivLine, DivCell, SupLabel } from '..';

describe('TableDiv', () => {
  it('is truthy', () => {
    expect(TableDiv).toBeTruthy();
    expect(DivLine).toBeTruthy();
    expect(DivCell).toBeTruthy();
    expect(SupLabel).toBeTruthy();
  });

  it('Test TableDiv renderer whith children', () => {
    const wrapper = shallow(
      <TableDiv className="test">
        <DivLine>
          <DivCell>
            <SupLabel>teste:</SupLabel>
            teste
          </DivCell>
        </DivLine>
        <DivLine fstart>
          <DivCell>TESTE</DivCell>
        </DivLine>
        <DivLine fend>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
        </DivLine>
        <DivLine fcenter>
          <DivCell width={32}>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
        </DivLine>
        <DivLine faround>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
        </DivLine>
        <DivLine fbetween>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
          <DivCell>TESTE</DivCell>
        </DivLine>
      </TableDiv>,
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
