import { getAnimals } from './apiCalls.js';

describe("getAnimals", () => {
  let mockUrl;
  let mockResponse;

  beforeEach(() => {
    mockUrl = "https://api.petfinder.com/v2/animals"

    mockResponse = {
      headers: Headers,
      ok: true,
      redirected: false,
      status: 200,
      statusText: "OK",
      type: "cors",
      url: mockUrl
    }

    mockOptions = {
      headers: {
        Authorization: "Bearer " + this.state.token
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it("should return a response if status is okay", async () => {
    const result = await getAnimals()
    expect(result).toEqual(mockResponse)
  })

  it("should return an error is status is not okay", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    const result = await getAnimals(mockUrl, options)
    expect(result).rejects.toThrow("error")
    })
})