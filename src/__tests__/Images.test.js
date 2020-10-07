import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { getKeyImage, imgForm, imgIcon, imgMessage, imgButton, imgLayout, imgDoc } from '../Images';

describe('Images', () => {
  it(`is truthy Images`, () => {
    expect(imgForm).toBeTruthy();
    expect(imgIcon).toBeTruthy();
    expect(imgMessage).toBeTruthy();
    expect(imgButton).toBeTruthy();
    expect(imgLayout).toBeTruthy();
    expect(imgDoc).toBeTruthy();
  });

  it(`Test images FORM`, () => {
    const Comp = imgForm.getImageByType(null, false);
    const nulo = {
      plain: imgForm.getImageByType(null, true),
      comp: shallow(<Comp />).html(),
    };
    const require = getKeyImage(imgForm.requireList).map((key) => {
      return imgForm.getImageByType(key, true);
    });
    const importing = getKeyImage(imgForm.importList).map((key) => {
      return imgForm.importList[key];
    });
    const component = getKeyImage(imgForm.componentList).map((key) => {
      const C = imgForm.getImageByType(key, false);
      return shallow(<C />).html();
    });
    expect({ nulo, require, importing, component }).toMatchSnapshot();
  });

  it(`Test images ICON`, () => {
    const Comp = imgIcon.getImageByType(null, false);
    const nulo = {
      plain: imgIcon.getImageByType(null, true),
      comp: shallow(<Comp />).html(),
    };
    const require = getKeyImage(imgIcon.requireList).map((key) => {
      return imgIcon.getImageByType(key, true);
    });
    const importing = getKeyImage(imgIcon.importList).map((key) => {
      return imgIcon.importList[key];
    });
    const component = getKeyImage(imgIcon.componentList).map((key) => {
      const C = imgIcon.getImageByType(key, false);
      return shallow(<C />).html();
    });
    expect({ nulo, require, importing, component }).toMatchSnapshot();
  });

  it(`Test images MESSAGE`, () => {
    const Comp = imgMessage.getImageByType(null, false);
    const nulo = {
      plain: imgMessage.getImageByType(null, true),
      comp: shallow(<Comp />).html(),
    };
    const require = getKeyImage(imgMessage.requireList).map((key) => {
      return imgMessage.getImageByType(key, true);
    });
    const importing = getKeyImage(imgMessage.importList).map((key) => {
      return imgMessage.importList[key];
    });
    const component = getKeyImage(imgMessage.componentList).map((key) => {
      const C = imgMessage.getImageByType(key, false);
      return shallow(<C />).html();
    });
    expect({ nulo, require, importing, component }).toMatchSnapshot();
  });

  it(`Test images BUTTONS`, () => {
    const Comp = imgButton.getImageByType(null, false);
    const nulo = {
      plain: imgButton.getImageByType(null, true),
      comp: shallow(<Comp />).html(),
    };
    const require = getKeyImage(imgButton.requireList).map((key) => {
      return imgButton.getImageByType(key, true);
    });
    const importing = getKeyImage(imgButton.importList).map((key) => {
      return imgButton.importList[key];
    });
    const component = getKeyImage(imgButton.componentList).map((key) => {
      const C = imgButton.getImageByType(key, false);
      return shallow(<C />).html();
    });
    expect({ nulo, require, importing, component }).toMatchSnapshot();
  });

  it(`Test images LAYOUT`, () => {
    const require = getKeyImage(imgLayout.requireList).map((key) => {
      return [imgLayout.getImageByType(key), imgLayout.requireList[key]];
    });
    require.push([imgLayout.getImageByType(null), imgLayout.getImageByType('abcde')]);

    const importing = getKeyImage(imgLayout.importList).map((key) => {
      return [imgLayout.getImageByType(key, true), imgLayout.importList[key]];
    });
    importing.push([imgLayout.getImageByType(null, true), imgLayout.getImageByType('abcde', true)]);

    expect({ require, importing }).toMatchSnapshot();
  });

  it(`Test images DOCS`, () => {
    const require = getKeyImage(imgDoc.requireList).map((key) => {
      return [
        imgDoc.getImageByType(key, true),
        imgDoc.getImageByType(key),
        imgDoc.requireList[key],
      ];
    });
    require.push([
      imgDoc.getImageByType(null, true),
      imgDoc.getImageByType(null),
      imgDoc.getImageByType('abcde'),
    ]);

    const importing = getKeyImage(imgDoc.importList).map((key) => {
      return [imgDoc.getImageByType(key, true), imgDoc.getImageByType(key), imgDoc.importList[key]];
    });
    importing.push([
      imgDoc.getImageByType(null, true),
      imgDoc.getImageByType(null),
      imgDoc.getImageByType('abcde', true),
    ]);

    const component = getKeyImage(imgDoc.componentList).map((key) => {
      return [
        imgDoc.getImageByType(key, true),
        imgDoc.getImageByType(key),
        imgDoc.componentList[key],
      ];
    });

    component.push([
      imgDoc.getImageByType(null, true),
      imgDoc.getImageByType(null),
      imgDoc.getImageByType('abcde', true),
    ]);

    expect({ require, importing }).toMatchSnapshot();
  });
});
