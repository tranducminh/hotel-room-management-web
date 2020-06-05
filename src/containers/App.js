import React from 'react';
import { Route } from 'react-router-dom'

import AdminScreen from './Admin/AdminMain/AdminMain'
import EmployeeScreen from './Employee/EmployeeMain/EmployeeMain'
import HomeComponent from '../components/Empolyee/HomeComponent';

function App() {
  return (
      // <Route path="/" render={() => {
      //   const [subdomain] = window.location.hostname.split('.');
      //   if (subdomain === 'admin') return <AdminScreen />;
      //   return <EmployeeScreen/>;
      // }}/>
      <HomeComponent/>
    );
}

export default App;
