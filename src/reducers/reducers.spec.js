import { animalsReducer } from "./animals-reducer"
import * as actions from "../actions"
import { mockAnimals } from "../utils/mockData"
import { handleLoadingReducer } from "./handleLoading-reducer"

describe("animalsReducer", () => {
  it("should return initialState", () => {
    const expected = []
    const result = animalsReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it("should return the state with set animals", () => {
    const expected = mockAnimals

    const result = animalsReducer(undefined, actions.setAnimals(mockAnimals))

    expect(result).toEqual(expected)
  })
})

describe("handleLoadingReducer", () => {
  it("should return initialState", () => {
    const expected = true
    const result = handleLoadingReducer(undefined, true)
    expect(result).toEqual(expected)
  })

  it("should return the state with a boolean when the case is HANDLE_LOADING", () => {
    const expected = true
    const result = handleLoadingReducer(undefined, actions.handleLoading(true))

    expect(result).toEqual(expected)
  })
})
