import { combineReducers } from 'redux';
import deskReducer from './deskReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  desk: deskReducer,
  task: taskReducer,
});

export default rootReducer;
