const initialState = []
export const animalsReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_ANIMALS':
      return action.animals
      default: 
      return state
  }
}