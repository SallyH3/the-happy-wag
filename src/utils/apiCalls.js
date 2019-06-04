export const getAnimals = async (url, options) => {
  const response = await fetch(url, options) 
  if(!response.ok) {
    return Error('Error fetching data')
  }
  return await response.json()
}
