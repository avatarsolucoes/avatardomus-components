import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from '../../setupEnzyme';

import { ImageMessage } from '../ImageMessage';
import { svgComponentList, getKeyImage } from '../Images';

const src = 'https://avatarsolucoesdigitais.com.br/images/logoh100.svg';

describe('ImageMessage', () => {
  it('is truthy ImageMessage', () => {
    expect(ImageMessage).toBeTruthy();
  });

  const namesList = getKeyImage(svgComponentList);
  it(`Testando namesList`, () => {
    const imagesMount = namesList.map((imgKey) => {
      return {
        withouText: renderer.create(<ImageMessage type={imgKey} className="teste1" />).toJSON(),
        withText: renderer.create(<ImageMessage text="test" type={imgKey} size={100} />).toJSON(),
        raw: renderer.create(<ImageMessage raw type={imgKey} />).toJSON(),
      };
    });
    expect(imagesMount).toMatchSnapshot();
  });

  it(`Testando with src`, () => {
    const wrapper = {
      raw: renderer.create(<ImageMessage raw src={src} />).toJSON(),
      src: renderer.create(<ImageMessage src={src} />).toJSON(),
    };
    expect(wrapper).toMatchSnapshot();
  });
});
