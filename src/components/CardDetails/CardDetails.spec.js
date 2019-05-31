import React from 'react';
import { CardDetails } from './index';
import { shallow } from 'enzyme';
import { cleanContactInfo } from '../../utils/cleaners.js';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('CardDetails', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardDetails />
    )
  });

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})