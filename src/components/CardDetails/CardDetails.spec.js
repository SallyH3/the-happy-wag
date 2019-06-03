import React from 'react';
import { CardDetails } from './index';
import { shallow } from 'enzyme';
import { cleanContactInfo } from '../../utils/cleaners.js';
import { createSerializer } from 'enzyme-to-json';
import { mockSelectedAnimal, mockContactInfo, mockPhotos } from '../../utils/mockData';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('CardDetails', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardDetails 
        contact={mockContactInfo}
        animals={mockSelectedAnimal}
        photos={mockPhotos}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})