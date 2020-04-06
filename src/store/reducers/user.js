import * as actionTypes from '../actionTypes'

const initialState = {
  isAuth: false,
  userInfo: {
    email: '',
    username: '',
    fullname: ''
  }
}

const signInSuccess = (state, action) => {
  return;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SIGN_IN_SUCCESS: return signInSuccess(state, action);
      default: return state;
  }
}

export default reducer;