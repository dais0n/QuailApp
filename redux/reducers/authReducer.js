const initialState = { user: null };

import {
  LOGIN_SUCCESS,
} from '../actions/types';


export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    default:
      return state;
  }
};
