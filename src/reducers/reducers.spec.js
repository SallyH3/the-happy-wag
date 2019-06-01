import { animalsReducer } from './animals-reducer';
import * as actions from '../actions';

describe('animalsReducer', () => {
  it('should return initialState', () => {
    const expected = []
    const result = animalsReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})
