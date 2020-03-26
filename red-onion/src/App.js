import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import BreakFast from './components/BreakFast/BreakFast';
import Dinner from './components/Dinner/Dinner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lunch from './components/Lunch/Lunch';
import Footer from './components/Footer/Footer';
import SiteInfo from './components/SiteInfo/SiteInfo';
import ItemDetails from './components/ItemDetails/ItemDetails';


function App() {
  
  return (
    <div className="App">

      <Home></Home>
      <Router>
        <Switch>
          <Route path="/breakfast">
             <BreakFast></BreakFast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
             <Dinner></Dinner>
          </Route>
          <Route path="/:name">
             <ItemDetails></ItemDetails>
          </Route>
        </Switch>
      </Router>
     
      <Footer></Footer>
      <SiteInfo></SiteInfo>
    </div>
  );
}

export default App;
