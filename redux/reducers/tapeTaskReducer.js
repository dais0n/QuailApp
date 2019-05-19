import {
    TAPE_TASK_FETCH_SUCCESS,
  } from '../actions/types';

  const initialState = { tapeTaskList: null };

  export default (state = initialState, action) => {
    switch (action.type) {
      case TAPE_TASK_FETCH_SUCCESS:
        return { ...state, ...initialState, tapeTaskList: action.payload };
      default:
        return state;
    }
  };
