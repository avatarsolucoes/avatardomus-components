import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from '../../setupEnzyme';

import { svgComponentList, svgRequireList, getKeyImage, getImageByType } from '../Images';

describe('Images', () => {
  it(`is truthy ImagesComponents`, () => {
    expect(svgComponentList).toBeTruthy();
  });

  it(`is truthy ImagesComponents`, () => {
    expect(svgRequireList).toBeTruthy();
  });

  it(`Test unknow images`, () => {
    const unSvg = getImageByType(null, true);
    const UnComp = getImageByType(null, false);
    const wrapper = renderer.create(<UnComp />).toJSON();
    expect({ unSvg, unComp: wrapper }).toMatchSnapshot();
  });

  it(`Test getImageType() SVG`, () => {
    const namesList = getKeyImage(svgRequireList);
    const wrapper = namesList.map((name) => {
      return getImageByType(name, true);
    });
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test getImageType() COMPONENT`, () => {
    const namesList = getKeyImage(svgComponentList);
    const wrapper = namesList.map((name) => {
      const Img = getImageByType(name, false);
      return renderer.create(<Img />).toJSON();
    });
    expect(wrapper).toMatchSnapshot();
  });
});
