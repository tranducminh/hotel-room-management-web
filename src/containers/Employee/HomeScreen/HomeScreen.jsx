import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginPage from '../../Login/Login'

import './HomeScreen.scss'

export default class HomeScreen extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <LoginPage/>
    )
  }
}
