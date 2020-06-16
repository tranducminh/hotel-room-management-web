import React, { Component } from 'react'
import { Tabs } from 'antd';
import RoomList from '../../../components/Employee/RoomList'
import CustomerForm from '../../../components/Employee/CustomerForm'
import './HomeScreen.scss'
import RoomDataDetailProvider from './../Context/RoomDataDetailProvider';
import ModalDataRoom from './../../../components/Employee/ModalDataRoom';

const { TabPane } = Tabs;

export default class HomeScreen extends Component {
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
      <RoomDataDetailProvider>
        <h1>Ready room</h1>
        <RoomList readyRoom floor={floor} />
        <h1>Coming room</h1>
        <RoomList readyRoom={false} floor={floor} /> 
        <CustomerForm visible={this.state.visible} bookRoom={this.bookRoom} />
        <ModalDataRoom/>
      </RoomDataDetailProvider>
    )
  }
}
