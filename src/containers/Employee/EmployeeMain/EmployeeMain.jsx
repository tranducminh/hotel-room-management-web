import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import HomeScreen from '../HomeScreen/HomeScreen'
import NotFoundScreen from '../../NotFoundScreen/NotFoundScreen'

export default class EmployeeMain extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    )
  }
}
