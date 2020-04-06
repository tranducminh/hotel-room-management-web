import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function* signInSaga(action) {
  try {    
      let result = yield axios.post(`${process.env.REACT_APP_URL_AUTH}/login`, action.signinData)
      localStorage.setItem(
          'token', result.headers['x-auth-token']
      )
      if(result.data){
          yield put(actions.signInSuccess(result.data));
      }
  } catch (error) {
      alert(error.response.data);
  }
}