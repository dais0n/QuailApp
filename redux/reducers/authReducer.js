import {
  LOGIN_OK,
  LOGIN_FAILURE
} from '../actions/types';

const initialState = { isLoggedIn: false, uid: null, displayName: null, photoURL: null};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        ...initialState,
        isLoggedIn: true,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL
      };
    case LOGIN_FAILURE:
      return {...state, ...initialState, isLoggedIn: false};
    default:
      return state;
  }
};
