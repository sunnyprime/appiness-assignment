import React from 'react'
import './App.css';
import Dashboards from './Component/Dashboards';
import Header from './Component/Header';
import Login from './Component/Login';
import {connect} from 'react-redux'

function App({auth}) {
  const isAuthorized = auth
  return (
    <React.Fragment>
      <Header />
      {isAuthorized ? <Dashboards />:<Login />}
    </React.Fragment>
  );
}
const mapStateToProps=(state)=> {
  return { auth:state.auth }
}

export default connect(mapStateToProps,null)(App);
