import { App, mapStateToProps, mapDispatchToProps } from '../App';
import { shallow } from 'enzyme';
import React from 'react';
import { setAnimals } from '../../actions';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
				<App />
		);
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {

		it('should return an object with the animals array', () => {

			const mockState = {
				animals: ['animals']
			}

			const expected = {
				animals: mockState.animals 
			}

			const mappedProps = mapStateToProps(mockState)
			expect(mappedProps).toEqual(expected)
		})
  });
  
  describe('mapDispatchToProps', () => {

    it('should call dispatch when using a function from mapDispatchToProps', () => {

      const mockDispatch = jest.fn();

      const actionToDispatch = setAnimals(['animals'])

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setAnimals(['animals'])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})