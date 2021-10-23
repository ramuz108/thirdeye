import React from 'react';
import './App.css';
import {Route , BrowserRouter as Router , Switch , Link} from "react-router-dom";
import logo from './logo.png';
import Login from './Login';
import Police from './Police';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import security from './security.png';
import Tests from './Tests';
class App extends React.Component {
  constructor(props) {
    super(props);
        
  }
  

  render() {
   
    return (
     <div  className="container">    
    <Router>
   <Switch>
    <Route path = "/" exact component = {Login} />
    <Route path = "/tests" exact component = {Tests} />
    </Switch>
    </Router>
    </div>
    );
  }
}

export default App;
