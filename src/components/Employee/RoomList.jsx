import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import RoomItem from './RoomItem'
import Axios from 'axios'

export default class RoomList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props){
    super(props);
    this.state = {
      RoomList: []
    }
  }
  componentDidMount = () => {
    if(this.props.readyRoom === true)
    Axios.get("http://localhost:8080/rooms/status/ready")
    .then(data => {
      this.setState({
        RoomList: data.data.filter(room =>(room.roomNumber[0] === this.props.floor))
      });
    })
    else{
      Axios.get("http://localhost:8080/rooms/status/inuse")
      .then(data => {
        this.setState({
          RoomList: data.data.filter(room =>(room.roomNumber[0] === this.props.floor))
        });
      })
    }
  }

  render() {
    const { RoomList }  = this.state;
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={RoomList}
        renderItem={item => (
          <List.Item>
            <RoomItem bookRoom={this.props.bookRoom} room={item}/>
          </List.Item>
        )}
      />
    )
  }
}
