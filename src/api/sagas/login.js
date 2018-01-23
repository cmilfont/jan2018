import firebase from 'firebase';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function* loginUser(firebaseApp) {
  try {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    authProvider.addScope('profile');
    authProvider.addScope('email');
    authProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const { user: payload } = yield firebaseApp.auth().signInWithPopup(authProvider);
    const { displayName, photoURL, email, uid } = payload;
    const ref =  yield firebaseApp.database().ref(`/users/${uid}`);
    yield ref.update({ displayName, photoURL, email });
    yield put({ type: actions.LOGIN_USER_SUCCESSFUL, payload });
    yield put(push('/'));

  } catch (err) {
    yield put({ type: 'ERROR', payload: err });
  }
}

export default function* watchLogin(firebaseApp) {
  yield takeLatest(actions.LOGIN_USER, loginUser, firebaseApp)
}