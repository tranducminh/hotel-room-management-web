import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './HomeScreen.scss'

export default class HomeScreen extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <h1 className="adminHomeScreenContainer">
        Admin Screen
      </h1>
    )
  }
}
