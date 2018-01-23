import { take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function createSocketChannel(firebase) {
  return eventChannel(emit => {
    firebase.auth().onAuthStateChanged((user) => emit(user || {}))
    return () => {}
  })
}

export default function* watchLogged(firebase) {
  const socketChannel = yield call(createSocketChannel, firebase);
  while (true) {
    const payload = yield take(socketChannel);
    if (payload.email) {
      yield put({
        type: actions.LOGIN_USER_SUCCESSFUL,
        payload,
      })
    } else {
      yield put(push('/login'));
    }
  }
}