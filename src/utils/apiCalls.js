export const getAnimals = async (url, options) => {
  const response = await fetch(url, options) 
  const result = await response.json()
  if(!response.ok) {
    throw Error('Error fetching data')
  }
  return result
}

//tests:
//fetch correct param
//good response
//one for response error
