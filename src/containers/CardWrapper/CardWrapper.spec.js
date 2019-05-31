import React from 'react';
import { CardWrapper } from './index';
import { shallow } from 'enzyme';

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