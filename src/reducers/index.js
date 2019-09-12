import { combineReducers } from 'redux';
import { paintingsReducer } from './paintings'
import { favoritesReducer } from './favorites'


const rootReducer = combineReducers({
    paintings: paintingsReducer,
    favorites: favoritesReducer
});

export default rootReducer;