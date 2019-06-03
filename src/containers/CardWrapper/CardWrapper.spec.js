import React from 'react';
import { CardWrapper } from './index';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import { mockSelectedAnimal } from '../../utils/mockData';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('CardWrapper', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(
      <CardWrapper 
      animals={ [mockSelectedAnimal] }/>
    )
    expect(wrapper).toMatchSnapshot();
  })
})