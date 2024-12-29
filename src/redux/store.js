import { createStore, combineReducers, applyMiddleware } from 'redux';
import restaurantReducer from './reducers/restaurantReducer';
import cartReducer from './reducers/cartReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  restaurantReducer,
  cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
