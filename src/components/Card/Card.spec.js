import React from 'react';
import { Card } from './index';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card />
    )
  })
  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})