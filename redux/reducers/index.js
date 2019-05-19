import { combineReducers } from 'redux';
import tapeTaskReducer from './tapeTaskReducer'


export default combineReducers({
  tapeTask: tapeTaskReducer,
})
