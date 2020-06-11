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

  it('Test renderer whith h1', () => {
    const wrapper = shallow(<PageTitle h1="TESTE1" />);
    expect(wrapper.exists('h1')).toBe(true);
  });
  it('Test renderer whith h2', () => {
    const wrapper = shallow(<PageTitle h2="TESTE2" />);
    expect(wrapper.exists('h2')).toBe(true);
  });
  it('Test renderer whith h3', () => {
    const wrapper = shallow(<PageTitle h3="TESTE3" />);
    expect(wrapper.exists('h3')).toBe(true);
  });
  it('Test renderer whith h4', () => {
    const wrapper = shallow(<PageTitle h4="TESTE4" />);
    expect(wrapper.exists('h4')).toBe(true);
  });
  it('Test renderer whith blank', () => {
    const wrapper = shallow(<PageTitle />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
