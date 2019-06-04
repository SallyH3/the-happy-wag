import * as actions from "./index"

describe("actions", () => {
  it("should return type of SET_ANIMALS with a payload of animals", () => {

    const animals = {name: "Ducky", species: "Dog"}
    const expected = {
      type: "SET_ANIMALS",
      animals
    }
    const result = actions.setAnimals(animals)

    expect(result).toEqual(expected)
  })

  it("should return type of HANDLE_LOADING with a payload of a boolean", () => {

    const boolean = true
    const expected = {
      type: "HANDLE_LOADING",
      boolean
    }
    const result = actions.handleLoading(boolean)
  })
})