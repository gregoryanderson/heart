export const facetsReducer = (state=[], action) => {
    switch(action.type) {
        case 'ESTABLISH_FACETS':
          return action.facets
        default:
          return state
    }
  }