export const paintingsReducer = (state=[], action) => {
    switch(action.type) {
        case 'ESTABLISH_PAINTINGS':
            return action.paintings
        default:
          return state
    }
  }