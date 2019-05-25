import { combineReducers } from 'redux';
import tapeTaskReducer from './tapeTaskReducer'
import authReducer from './authReducer';


export default combineReducers({
  tapeTask: tapeTaskReducer,
  user: authReducer
})
