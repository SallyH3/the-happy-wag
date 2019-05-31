import React from 'react';
import { Header } from './index';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})