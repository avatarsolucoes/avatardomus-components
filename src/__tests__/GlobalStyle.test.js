// import React from 'react';
// import renderer from 'react-test-renderer';

import initialState from '../GlobalStyle/globalTheme';

describe('GlobalStyle', () => {
  it('is truthy initialState', () => {
    expect(initialState).toBeTruthy();
    const state = JSON.stringify(initialState);
    expect(state).toMatchSnapshot();
  });
});
