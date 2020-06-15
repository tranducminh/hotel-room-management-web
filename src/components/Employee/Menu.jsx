import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import './Employee.scss';

export default class HeaderComponent extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    current: 'about',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home" >
          <NavLink exact to="/" activeStyle={{
            fontWeight: "bold",
            color: "#1890ff"
          }}>Home</NavLink>
        </Menu.Item>
        <Menu.Item key="about" >
          <NavLink to="/about" activeStyle={{
            fontWeight: "bold",
            color: "#1890ff"
          }}>About</NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}
