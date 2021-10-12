import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import AddItems from "./components/AddItems";
import Account from "./components/Account";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import React, {useState,useEffect} from "react";
import { getUser, getToken, setUserSession, resetUserSession } from "./services/AuthService";

import axios from "axios";

const verifyURL = 'https://uy2hzefdoe.execute-api.us-east-1.amazonaws.com/prod/verify';

function App() {
  

  const [isAuth, setAuth] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (token === 'token is undifined!' || token === undefined || token === null || !token) {
      return;
    }

    const requestConfig = {
      headers: {
        'x-api-key': 'xsbsfCjt5P4KPGZtIaUqw6uUer0o3sSUpy5xfv5i'
      }
    }
    const requestBody = {
      user: getUser(),
      token: token
    }

    axios.post(verifyURL, requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
      setAuth(false);
    }).catch(() => {
      resetUserSession();
      setAuth(false);
    })
  }, []);

  const token = getToken();
  if (isAuth && token) {
    return <div className="content">Please wait.....</div>
  }
  return (
    <div className="App">
     <BrowserRouter>
      <div className="header">
        <NavLink exact activeClassName="active" to="/">HomePage</NavLink>
        <NavLink activeClassName="active" to="/register">Signup</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/account">Account</NavLink>
        <NavLink activeClassName="active" to="/add">Add new Movie</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <PublicRoute path="/register" component={Signup}/>
          <PublicRoute path="/login" component={Login}/>
          <PrivateRoute path="/account" component={Account}/>
          <PrivateRoute path="/add" component={AddItems}/>
         
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
