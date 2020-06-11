import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { FormContent, Campo, Grupo, ButtonCampo, CampoMask } from '../FormDomus';

function Form() {
  return (
    <FormContent width={700} onSubmit={() => {}} initialData={{ nasc: '27/05/1983' }}>
      <Campo name="teste1" />
      <Grupo>
        <ButtonCampo model="text" disabled>
          BTN 1
        </ButtonCampo>
        <ButtonCampo model="submit">BTN 2</ButtonCampo>
      </Grupo>
      <Grupo>
        <ButtonCampo>BTN 3</ButtonCampo>
        <ButtonCampo icon="back" model="text">
          BTN 4
        </ButtonCampo>
      </Grupo>
      <Grupo fixed>
        <ButtonCampo wchild="w50" model="text">
          BTN 3
        </ButtonCampo>
        <ButtonCampo wchild="w50" iconR="back" model="text">
          BTN 4
        </ButtonCampo>
      </Grupo>
      <CampoMask name="nasc" mask="99/99/9999" lbicon="nasc" placeholder="data de nascimento" />
    </FormContent>
  );
}

describe('test FormContent', () => {
  it(`is truthy Form`, () => {
    expect(Form).toBeTruthy();
  });

  it('should show App click', () => {
    const wrapper = mount(<Form />);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test shallow `, () => {
    const wrapper = shallow(<Form />).html();
    expect(wrapper).toMatchSnapshot();
  });
});
