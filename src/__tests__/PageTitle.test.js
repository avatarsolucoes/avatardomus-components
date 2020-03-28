import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { PageTitle } from '..';

describe('PageTitle', () => {
  it('is truthy', () => {
    expect(PageTitle).toBeTruthy();
  });

  it('Test renderer whith children', () => {
    const estilo = {
      width: '100%',
      maxWidth: '100%',
    };

    const wrapper = shallow(
      <PageTitle className="test" style={estilo}>
        <h1>Test Title</h1>
      </PageTitle>,
    );
    expect(wrapper.exists('.test')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
