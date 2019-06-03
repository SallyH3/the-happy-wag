import React from 'react';
import { Card } from './index';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import { mockPhotos } from '../../utils/mockData';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card photo={mockPhotos}/>
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})