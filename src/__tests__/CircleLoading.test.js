import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { CircleLoading } from '../Loading';

describe('CircleLoading', () => {
  it('is truthy', () => {
    expect(CircleLoading).toBeTruthy();
  });

  it('Test component without', () => {
    const wrapper = shallow(<CircleLoading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Teste renderer whith children', () => {
    const wrapper = renderer
      .create(
        <CircleLoading color="#F00" dutaion={0.7}>
          TESTE
        </CircleLoading>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Teste renderer whith text', () => {
    const wrapper = renderer.create(<CircleLoading color="#F00" dutaion={0.7} text="teste" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
