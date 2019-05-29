import {
    TAPE_TASK_FETCH_SUCCESS,
  } from '../actions/types';

  const initialState = { tapeTaskList: [] };

  export default (state = initialState, action) => {
    switch (action.type) {
      case TAPE_TASK_FETCH_SUCCESS:
        return Object.assign({}, state, {tapeTaskList: [...state.tapeTaskList, action.payload]})
      default:
        return state;
    }
  };
