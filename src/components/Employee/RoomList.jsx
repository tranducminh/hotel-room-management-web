import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import RoomItem from './RoomItem'

export default class RoomList extends Component {
  static propTypes = {
    prop: PropTypes
  }
  

  render() {
    const data = [
      {
        title: 'Title 1',
      },
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      },
    ];
    
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <RoomItem bookRoom={this.props.bookRoom}/>
          </List.Item>
        )}
      />
    )
  }
}
