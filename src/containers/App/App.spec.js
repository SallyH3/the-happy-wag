import { App, mapStateToProps } from '../App';
import { shallow } from 'enzyme';
import React from 'react';
import { setAnimals } from '../../actions';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
				<App />
		);
	});

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
})