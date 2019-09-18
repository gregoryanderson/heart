import { combineReducers } from "redux";
import { paintingsReducer } from "./paintings";
import { favoritesReducer } from "./favorites";
import { facetsReducer } from "./facets";
import { userReducer } from "./user";
import { users } from './users'

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  favorites: favoritesReducer,
  facets: facetsReducer,
  user: userReducer,
  users: users
});

export default rootReducer;
