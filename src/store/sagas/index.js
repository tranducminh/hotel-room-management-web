import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';

import { signInSaga } from './user'

export function* watchUser() {
  yield takeEvery(actionTypes.SIGN_IN, signInSaga)
} 