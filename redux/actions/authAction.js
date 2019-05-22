import { Google } from 'expo';
import firebase from '../../plugins/firebase'
import { ENV } from "../../environments";


export const login = () => {
  return async (dispatch) => {
    const result = await Google.logInAsync({
      behavior: 'web',
      iosClientId: ENV.firebaseIosCleintID
    });

    if (result.type === "success") {
      const { idToken, accessToken } = result;
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
      firebase.auth().signInWithCredential(credential)
        .then(user => loginSuccess(dispatch, user))
        .catch(() => loginFailure(dispatch))
    }
  }
}

const loginFailure = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAILURE });
};

const loginSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};
