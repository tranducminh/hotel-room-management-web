import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'antd'
import { Context } from './../../containers/Employee/Context/RoomDataDetailProvider';
class RoomItem extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentDidMount = () => {
     // console.log(this.props.room);
  }

  render() {
    const { room, setModalVisible, setFormVisible, setRoom } = this.props;
    const onClick = () => {
      
      if(room.roomStatus !== 'READY') {
        
        setModalVisible(true);
      }
      else{
        setFormVisible(true);
      }
      this.props.setRoom(this.props.room);
        
     
    }
   
    const button = () => (
      <Button type="primary" ghost size={30} onClick={onClick}>
        {room.roomStatus !== 'READY'? 'Checkout':'Book now'}
      </Button>
    )
   
    return (
      <Card size="small" title={`Room ${room.roomNumber}`} extra={button()} style={{ width: 300 }}>
        <p>Status: {room.roomStatus}</p>
        <p>Capacity: {room.capacity} people</p>
      </Card>
    )
  }
}
export default props => (
  <Context.Consumer>
    {({ setModalVisible, setRoom, formVisible, setFormVisible }) => (
      <RoomItem setModalVisible={setModalVisible} setRoom={setRoom} formVisible={formVisible}  setFormVisible={setFormVisible} {...props} />
    )}
  </Context.Consumer>
);
