import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from '../setupEnzyme';

import { getKeyImage, imgForm, imgIcon, imgMessage } from '../Images';

describe('Images', () => {
  it(`is truthy Images`, () => {
    expect(imgForm).toBeTruthy();
    expect(imgIcon).toBeTruthy();
    expect(imgMessage).toBeTruthy();
  });

  it(`Test unknow images FORM`, () => {
    const unSvg = imgForm.getImageByType(null, true);
    const UnComp = imgForm.getImageByType(null, false);
    const wrapper = shallow(<UnComp />).html();
    expect({ unSvg, unComp: wrapper }).toMatchSnapshot();
  });

  it(`Test unknow images ICON`, () => {
    const unSvg = imgIcon.getImageByType(null, true);
    const UnComp = imgIcon.getImageByType(null, false);
    const wrapper = shallow(<UnComp />).html();
    expect({ unSvg, unComp: wrapper }).toMatchSnapshot();
  });

  it(`Test unknow images MESSAGE`, () => {
    const unSvg = imgMessage.getImageByType(null, true);
    const UnComp = imgMessage.getImageByType(null, false);
    const wrapper = shallow(<UnComp />).html();
    expect({ unSvg, unComp: wrapper }).toMatchSnapshot();
  });

  it(`Test getImageType() SVG`, () => {
    const namesList = {
      form: getKeyImage(imgForm.requireList),
      icon: getKeyImage(imgIcon.requireList),
      message: getKeyImage(imgMessage.requireList),
    };
    const wrapper = {
      form: namesList.form.map((name) => imgForm.getImageByType(name, true)),
      icon: namesList.icon.map((name) => imgIcon.getImageByType(name, true)),
      message: namesList.message.map((name) => imgMessage.getImageByType(name, true)),
    };
    expect(wrapper).toMatchSnapshot();
  });

  it(`Test RENDER`, () => {
    const namesList = {
      form: getKeyImage(imgForm.componentList),
      icon: getKeyImage(imgIcon.componentList),
      message: getKeyImage(imgMessage.componentList),
    };
    const wrapper = {
      form: namesList.form.map((name) => {
        const Img = imgForm.getImageByType(name, false);
        return renderer.create(<Img />).toJSON();
      }),
      icon: namesList.icon.map((name) => {
        const Img = imgIcon.getImageByType(name, false);
        return renderer.create(<Img />).toJSON();
      }),
      message: namesList.message.map((name) => {
        const Img = imgMessage.getImageByType(name, false);
        return renderer.create(<Img />).toJSON();
      }),
    };
    expect(wrapper).toMatchSnapshot();
  });
});
