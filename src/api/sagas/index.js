import { fork } from 'redux-saga/effects';

import watchLogged from 'api/sagas/logged';
import watchLogin from 'api/sagas/login';
import watchLogout from 'api/sagas/logout';

export default function* rootSaga(firebase) {
  yield fork(watchLogged, firebase);
  yield fork(watchLogin, firebase);
  yield fork(watchLogout, firebase);
}
