import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../../../components/Admin/HeaderComponent/HeaderComponent.jsx'

import './HomeScreen.scss'

export default class HomeScreen extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="adminHomeScreenContainer">
        <HeaderComponent/>
      </div>
    )
  }
}
