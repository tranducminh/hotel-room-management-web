import * as actions from '../actionTypes'

export const signIn = (signinData) => ({
  type: actions.SIGN_IN,
  signinData
})

export const signInSuccess = (userData) => ({
  type: actions.SIGN_IN_SUCCESS,
  userData
})