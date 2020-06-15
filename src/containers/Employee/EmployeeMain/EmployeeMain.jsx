import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import "./EmployeeMain.scss"

import HomeScreen from '../HomeScreen/HomeScreen'
import NotFoundScreen from '../../NotFoundScreen/NotFoundScreen'
import Menu from '../../../components/Employee/Menu';

const { Header, Content, Sider } = Layout;

export default class EmployeeMain extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <span className="logo" >Future</span>
          <Menu />
        </Header>
        <Layout>
          <Content className="content">
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route component={NotFoundScreen} />
            </Switch>
          </Content>
        </Layout>
      </Layout>

    )
  }
}
