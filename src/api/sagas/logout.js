import { takeLatest, put } from 'redux-saga/effects';
import actions from 'api/actions';

function* prepareLogout(firebase) {
  yield firebase.auth().signOut();
}

export default function* watchLogout(firebase) {
  yield takeLatest(actions.LOGOUT_USER, prepareLogout, firebase);
}