import React from 'react';
import * as actions from './index';

describe('actions', () => {
  it('should return type of SET_ANIMALS with a payload of animals', () => {

    const animals = {name: "Ducky", species: "Dog"}
    const expected = {
      type: 'SET_ANIMALS',
      animals
    }
    const result = actions.setAnimals(animals)

    expect(result).toEqual(expected)
  });
})