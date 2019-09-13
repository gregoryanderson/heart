import { combineReducers } from 'redux';
import { paintingsReducer } from './paintings'
import { favoritesReducer } from './favorites'
import { facetsReducer } from './facets'



const rootReducer = combineReducers({
    paintings: paintingsReducer,
    favorites: favoritesReducer,
    facets: facetsReducer
});

export default rootReducer;