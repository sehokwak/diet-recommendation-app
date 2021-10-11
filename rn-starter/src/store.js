import {createStore, combineReducers} from 'redux';
import foodReducer from './reducers/foodReducer';
import nameReducer from './reducers/nameReducer'

const rootReducer = combineReducers({
  foodReducer: foodReducer,
  nameReducer: nameReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;