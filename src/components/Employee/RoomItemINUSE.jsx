import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'antd'
import { Context } from '../../containers/Employee/Context/RoomDataDetailProvider';
class RoomItem extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentDidMount = () => {
     // console.log(this.props.room);
  }

  render() {
    const { roomINUSE, setModalVisible, setFormVisible, setRoom } = this.props;
    const onClick = () => {
      this.props.setRoomINUSE(this.props.roomINUSE);
      setModalVisible(true);
      
    }
   
    const button = () => (
      <Button type="primary" ghost size={30} onClick={onClick}>
        {'Checkout'}
      </Button>
    )
   
    return (
      <Card size="small" title={`Room ${roomINUSE.room.roomNumber}`} extra={button()} style={{ width: 300 }}>
        <p>Status: {roomINUSE.room.roomStatus}</p>
        <p>Capacity: {roomINUSE.room.capacity} people</p>
      </Card>
    )
  }
}
export default props => (
  <Context.Consumer>
    {({ setModalVisible, setRoom, formVisible, setFormVisible, setRoomINUSE }) => (
      <RoomItem setModalVisible={setModalVisible} setRoomINUSE={setRoomINUSE} formVisible={formVisible}  setFormVisible={setFormVisible} {...props} />
    )}
  </Context.Consumer>
);
