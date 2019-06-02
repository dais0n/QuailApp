import {
  TAPE_TASK_FETCH_SUCCESS,
  TAPE_TASK_UPDATE_STATUS,
} from '../actions/types';

const initialState = { tapeTaskList: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case TAPE_TASK_FETCH_SUCCESS:
      return Object.assign({}, state, { tapeTaskList: [...state.tapeTaskList, action.payload] })
    case TAPE_TASK_UPDATE_STATUS:
      const newTapeTaskList = state.tapeTaskList.map((s) => {
        if (s.id !== action.payload.taskId) {
          return s
        }
        return Object.assign(s, { status: action.payload.status })
      })
      return Object.assign({}, state, { tapeTaskList: newTapeTaskList })
    default:
      return state;
  }
};
