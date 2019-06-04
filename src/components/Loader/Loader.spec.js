import Loader from "./index"
import { shallow } from 'enzyme'
import React from 'react'

describe("Loader", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Loader />
    )
  })
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})