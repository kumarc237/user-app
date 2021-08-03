import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Company from "./Component/Company";
import User from './Component/User';
import Post from './Component/Post';
import Features from './Component/Features';
import Pricing from  './Component/Pricing';
import EmpList from './Component/EmpList';

function App() {
  return (
    <Router>
       <div className="App">
       <Route exact path="/" component={Company} />
       <Route exact path="/user" component={User} />
       <Route exact path="/post" component={Post} />
       <Route exact path="/features" component={Features} />
       <Route exact path="/pricing" component={Pricing} />
       <Route exact path="emp" component={EmpList} />
     </div>
    </Router>
   
  );
}

export default App;
