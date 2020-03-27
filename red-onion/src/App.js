import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import { AuthContextProvider } from './components/UseAuth/UseAuth';
import Tracking from './components/Tracking/Tracking';


function App() {
  
  return (
    <div className="App">
     <AuthContextProvider>
        <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
            </Route>
            <Route path="/order">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/tracking">
            <Tracking></Tracking>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
