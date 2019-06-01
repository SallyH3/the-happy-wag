import { animalsReducer } from './animals-reducer';
import * as actions from '../actions';
import { mockAnimals } from '../utils/mockData';

describe('animalsReducer', () => {
  it('should return initialState', () => {
    const expected = []
    const result = animalsReducer(undefined, {})

    expect(result).toEqual(expected)
  });

  it('should return the state with set animals', () => {
    const expected = mockAnimals

    const result = animalsReducer(undefined, actions.setAnimals(mockAnimals))

    expect(result).toEqual(expected)
  })
})
