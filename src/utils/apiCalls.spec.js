import { getAnimals } from './apiCalls.js';

describe("getAnimals", () => {
  let mockUrl;
  let mockResponse;
  let mockOptions;

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
        Authorization: "Bearer 99999"

    }
  }

  })

  it('should be called with the correct params', () => {
    
    window.fetch=jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: ()=> Promise.resolve(mockResponse)
			})
		})

		const expected1 = mockUrl
		const expected2 = mockOptions
		getAnimals(mockUrl, mockOptions)
		expect(window.fetch).toHaveBeenCalledWith(expected1, expected2);
	})
  
  it("should return a response if status is okay", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
    const result = await getAnimals()
    expect(result).toEqual(mockResponse)
  })

  it("should return an error is status is not okay", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.reject(mockResponse)
      })
    })
    const result = await getAnimals(mockUrl, mockOptions)
    let error = Error('Error fetching data')
    expect(result).toEqual(error)
    })
})