import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from '../setupEnzyme';
import { PageTitle } from '..';

describe('PageTitle', () => {
  it('is truthy', () => {
    expect(PageTitle).toBeTruthy();
  });

  it('Test renderer whith children', () => {
    const wrapper = shallow(
      <PageTitle className="test">
        <h1>Test Title</h1>
      </PageTitle>,
    );
    expect(wrapper.exists('.test')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
