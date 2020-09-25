import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

import Booking from './components/Booking/Booking';
import LoginPage from './components/LoginPage/LoginPage';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hotel from './components/Hotel/Hotel';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Notfound from './components/NotFound/Notfound';

import ForgotPage from './components/ForgotPage/ForgotPage';

export const UserContext = createContext();
function App() {
  const[loggedInUser,setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <Switch>
      <Route path="/header">
        <Header/>
      </Route>
      <Route path="/booking">
        <Booking/>
      </Route>
      <Route path="/forgot">
        <ForgotPage/>
      </Route>
      <Route path="/login">
        <LoginPage/>
      </Route>
      <PrivetRoute path="/hotel">
        <Hotel/>
      </PrivetRoute>
      <Route exact path="/">
        <Header/>
      </Route>
      <Route path="*">
        <Notfound/>
      </Route>
    </Switch>
    </Router>
    </UserContext.Provider >
   
  );
}

export default App;
