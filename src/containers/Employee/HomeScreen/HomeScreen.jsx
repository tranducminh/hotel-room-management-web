import React, { Component } from 'react'
import { Tabs } from 'antd';
import RoomList from '../../../components/Employee/RoomList'
import CustomerForm from '../../../components/Employee/CustomerForm'
import './HomeScreen.scss'

const { TabPane } = Tabs;

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <Tabs tabPosition="left">
          <TabPane tab="Floor 1" key="1">
            <FloorScreen />
          </TabPane>
          <TabPane tab="Floor 2" key="2">
            <FloorScreen />
          </TabPane>
          <TabPane tab="Floor 3" key="3">
            <FloorScreen />
          </TabPane>
        </Tabs>

      </>
    )
  }
}

class FloorScreen extends Component {
  state = { visible: false }
  render() {
    const bookRoom = () => {
      this.setState({ visible: true })
    }
    return (
      <>
        <h1>Ready room</h1>
        <RoomList bookRoom={bookRoom} />
        <h1>Coming room</h1>
        <RoomList bookRoom={bookRoom} />
        <CustomerForm visible={this.state.visible} />
      </>
    )
  }
}
