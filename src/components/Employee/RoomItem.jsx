import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'antd'
export default class RoomItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const onClick = () => {
      this.props.bookRoom();
    }
    const button = () => (
      <Button type="primary" ghost size={30} onClick={onClick}>
        Book now
      </Button>
    )
    return (
      <Card size="small" title="Room 1" extra={button()} style={{ width: 300 }}>
        <p>Status: Ready</p>
        <p>Capacity: 4 people</p>
      </Card>
    )
  }
}
