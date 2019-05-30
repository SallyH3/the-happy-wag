const initialState = []

const animalsReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'STORE_ANIMALS' :
      return action.animals
      default:
        return state
  }
}

export default animalsReducer;