export const favoritesReducer = (state=[], action) => {
    console.log('action', action)
    switch(action.type) {
        case 'ESTABLISH_FAVORITES':
          return action
        default:
          return state
    }
  }