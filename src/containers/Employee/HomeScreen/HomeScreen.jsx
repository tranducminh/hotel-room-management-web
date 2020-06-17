import React, { Component } from 'react'
import { Tabs } from 'antd';
import RoomListREADY from '../../../components/Employee/RoomListREADY'
import RoomListINUSE from '../../../components/Employee/RoomListINUSE'

import CustomerForm from '../../../components/Employee/CustomerForm'
import './HomeScreen.scss'
import Axios from "axios";

import { Context } from './../Context/RoomDataDetailProvider';
import ModalDataRoom from './../../../components/Employee/ModalDataRoom';

const { TabPane } = Tabs;

class HomeScreen extends Component {
  componentDidMount = () =>{
    Axios.get("http://localhost:8080/rooms/status/ready")
    .then(data => {
      this.props.setRoomListREADY(data.data);
    });

    Axios.get("http://localhost:8080/booking-rooms")
    .then(data => {
      console.log(data.data);
      this.props.setRoomListINUSE(data.data);
    })
  }
  render() {
    return (
      <>
        <Tabs tabPosition="left">
          <TabPane tab="Floor 1" key="1">
            <FloorScreen floor='1' />
          </TabPane>
          <TabPane tab="Floor 2" key="2">
            <FloorScreen floor='2' />
          </TabPane>
          <TabPane tab="Floor 3" key="3">
            <FloorScreen floor='3' />
          </TabPane>
        </Tabs>

      </>
    )
  }
}
export default props => (
  <Context.Consumer>
    {({
      setRoomListINUSE, setRoomListREADY,
    }) => (
      <HomeScreen 
      setRoomListINUSE={setRoomListINUSE}
      setRoomListREADY={setRoomListREADY}
      {...props} />
    )}
  </Context.Consumer>
);

class FloorScreen extends Component {
  state = { visible: false }
  constructor(props){
    super(props);
    
  }
  componentDidMount = () => {
    console.log(this.props.floor);
  }
  bookRoom = (visible) => {
    this.setState({ visible: visible })
  }
  render() {
    
    const {floor} = this.props;
    
    return (
      <>
        <h1>Ready room</h1>
        <RoomListREADY floor={floor} />
        <h1>Coming room</h1>
        <RoomListINUSE floor={floor} /> 
        <CustomerForm visible={this.state.visible} bookRoom={this.bookRoom} />
        <ModalDataRoom/>
      </>
    )
  }
}
