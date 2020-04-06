import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NotFoundScreen extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <h1>
        404 Not Found
      </h1>
    )
  }
}
