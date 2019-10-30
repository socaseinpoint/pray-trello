import { combineReducers } from 'redux';
import deskReducer from './deskReducer';

const rootReducer = combineReducers({
  desk: deskReducer,
});

export default rootReducer;
