import { combineReducers } from 'redux';
import { paintingsReducer } from './paintings'


const rootReducer = combineReducers({
    paintings: paintingsReducer
});

export default rootReducer;