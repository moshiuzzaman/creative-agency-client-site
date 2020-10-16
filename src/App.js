import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import Login from './Component/Login/Login';
import UserServiceList from './Component/Dashboard/UserServiceList/UserServiceList';
import Order from './Component/Dashboard/Order/Order';
import Review from './Component/Dashboard/Review/Review';
import OrderedServiceList from './Component/Dashboard/OrderedServiceList/OrderedServiceList';
import AddService from './Component/Dashboard/AddService/AddService';
import MakeAdmin from './Component/Dashboard/MakeAdmin/MakeAdmin';
import { createContext } from 'react';
import { useState } from 'react';
import PrivetRoute from './Component/Login/PrivetRoute';
import ServicesList from './Component/Dashboard/ServicesList/ServicesList';



export const UserContext = createContext()

function App() {
  const [allData,setAllData] = useState({})
  return (
    <UserContext.Provider value={[allData,setAllData]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivetRoute path="/UserServiceList">
            <UserServiceList />
          </PrivetRoute>
          <PrivetRoute path="/Order">
            <Order />
          </PrivetRoute>
          <PrivetRoute path="/Review">
            <Review />
          </PrivetRoute>
          <PrivetRoute path="/OrderedServiceList">
            <OrderedServiceList />
          </PrivetRoute>
          <PrivetRoute path="/AddService">
            <AddService />
          </PrivetRoute>
          <PrivetRoute path="/MakeAdmin">
            <MakeAdmin />
          </PrivetRoute>
          <PrivetRoute path="/ServicesList">
            <ServicesList />
          </PrivetRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
