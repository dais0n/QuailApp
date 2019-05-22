import {
  LOGIN_SUCCESS,
} from '../actions/types';

const initialState = { user: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    default:
      return state;
  }
};
