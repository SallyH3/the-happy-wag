import React from 'react';
import { CardWrapper } from './index';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('CardWrapper', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardWrapper />
    )
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})