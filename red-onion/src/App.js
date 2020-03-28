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
import { AuthContextProvider, PrivateRoute } from './components/useAuth/useAuth';
import NavBar from './components/NavBar/NavBar';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';



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
