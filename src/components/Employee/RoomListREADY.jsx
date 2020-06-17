import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import RoomItem from './RoomItem'
import {Context} from '../../containers/Employee/Context/RoomDataDetailProvider';

class RoomList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props){
    super(props);
  }
 
  render() {
    const listRoom = this.props.roomListREADY.filter(room=>room.roomNumber[0]=== this.props.floor);
    
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={listRoom}
        renderItem={item => {console.log(item);return (
          <List.Item>
            <RoomItem bookRoom={this.props.bookRoom} roomREADY={item}/>
          </List.Item>
        )}}
      />
    )
  }
}
export default props => (
  <Context.Consumer>
    {({roomListINUSE, roomListREADY,}) => (
      <RoomList 
        roomListINUSE={roomListINUSE}
        roomListREADY={roomListREADY}
        {...props} 
      />
    )}
  </Context.Consumer>
);
