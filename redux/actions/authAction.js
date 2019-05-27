import { Google } from 'expo';
import firebase from '../../plugins/firebase'
import { ENV } from "../../environments";
import { LOGIN_FAILURE, LOGIN_OK } from './types';
import { db } from '../../plugins/firebase'

export const login = () => {
  return async (dispatch) => {
    try {
      const loginResult = await Google.logInAsync({
        behavior: 'web',
        iosClientId: ENV.firebaseIosCleintID
      });
      // Login to firebase
      const { idToken, accessToken } = loginResult;
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
      const { user } = await firebase.auth().signInWithCredential(credential)
      // Login to redux
      loginOK(dispatch, user)
      return user
      // TODO: update profile
    } catch (e) {
      loginFailure(dispatch)
      return null
    }
  }
}

// check Login and redux Login
export const refLogin = () => {
  return async (dispatch) => {
    const user = await getCurrentUser().then((user) => {
      loginOK(dispatch, user)
      return user
    })
    return user
  }
}

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user);
    }, reject);
  });
}

// if user haven't login, register user
const updateProfile = (user) => {
  const { uid, displayName, photoURL } = user
  db.collection('users')
    .doc(uid)
    .set({ displayName, photoURL })
    .catch(console.error);
};

const loginFailure = (dispatch) => {
  dispatch({ type: LOGIN_FAILURE });
};

const loginOK = (dispatch, user) => {
  dispatch({ type: LOGIN_OK, payload: user });
  return user
}
