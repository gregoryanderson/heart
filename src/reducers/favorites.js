export const favoritesReducer = (state=[], action) => {
    console.log('action', action)
    switch(action.type) {
        case 'ADD_FAVORITES':
          return [...state, action.data]
        case 'DELETE_FAVORITES':
          const remainingFavs = state.filter(fav => {
            return fav.id !== action.data.id
          })
          return remainingFavs
        default:
          return state
    }
  }