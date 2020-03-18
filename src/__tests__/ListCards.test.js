import React from 'react';
import { shallow } from '../setupEnzyme';
import { ListCards, CardItem, CardTitle, CardContent } from '..';

function TestAll() {
  return (
    <ListCards>
      <CardItem w={50}>
        <CardTitle>
          <h3>Test titulo</h3>
        </CardTitle>
        <CardContent>A</CardContent>
      </CardItem>
      <CardItem w={50} desk={50} mobile={100}>
        <CardContent>B</CardContent>
      </CardItem>
      <CardItem mobile={100}>
        <CardContent>C</CardContent>
      </CardItem>
      <CardItem>
        <CardContent>D</CardContent>
      </CardItem>
    </ListCards>
  );
}

describe('ListCards', () => {
  it('is truthy', () => {
    expect(ListCards).toBeTruthy();
  });

  it('There should be elements', () => {
    const wrapper = shallow(<TestAll />);

    // expect(wrapper.find('.card-item')).toBe(true);
    // expect(wrapper.exists('.card-offset')).toBe(true);
    // expect(wrapper.exists('.card-item-content')).toBe(true);
    // expect(wrapper.exists('.list-of-cards')).toBe(true);
    // expect(wrapper.exists('.card-item-title')).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Test renderer whith children', () => {
    const wrapper = shallow(<TestAll />).html();
    expect(wrapper).toMatchSnapshot();
  });
});
