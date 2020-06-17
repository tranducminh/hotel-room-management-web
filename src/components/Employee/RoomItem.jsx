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
    const { roomREADY, setModalVisible, setFormVisible, } = this.props;
    const onClick = () => {
      
      this.props.setRoomREADY(roomREADY);
      setFormVisible(true);
    }
   
    const button = () => (
      <Button type="primary" ghost size={30} onClick={onClick}>
        {'Book now'}
      </Button>
    )
   
    return (
      <Card size="small" title={`Room ${roomREADY.roomNumber}`} extra={button()} style={{ width: 300 }}>
        <p>Status: {roomREADY.roomStatus}</p>
        <p>Capacity: {roomREADY.capacity} people</p>
      </Card>
    )
  }
}
export default props => (
  <Context.Consumer>
    {({ setModalVisible, setRoomREADY, formVisible, roomREADY, setFormVisible }) => (
      <RoomItem setModalVisible={setModalVisible} roomREADY={roomREADY} setRoomREADY={setRoomREADY} formVisible={formVisible}  setFormVisible={setFormVisible} {...props} />
    )}
  </Context.Consumer>
);
