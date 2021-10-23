/*
Author: Ramachandran Andayil
updated at: 

*/

import React from 'react';
import './App.css';
import logo from './logo.png';
import Police from './Police';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import security from './security.png';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }
  clearclick = () =>
  {
    document.getElementById('usr').value = "";
    document.getElementById('pass').value = "";
  }
  handleclick =() =>{
    var usr= document.getElementById('usr').value;
    var pass = document.getElementById('pass').value;
    if(usr.toString() == 'thirdeye' && pass.toString() == "123")
    {
     
    }
    else
    {
      
    }
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div className='logincontainer'>
      <Police />
      <center>
      <br /><br />
      <div className="App-header" style={{width:"500px",borderRadius:"20px"}}> 
      <br />
      <img src = {security} width="130" height="130" /><br /><br />
      <TextField 
      required    
      id="usr"
      label="Username"
      defaultValue=""
      variant="outlined"
      style = {{color: 'white',borderColor: "blue"}}
      focused
      inputProps={{ style: { fontFamily: 'nunito', color: 'blue',borderColor: "blue"}}}
    /><br /><br />
    <TextField 
      required   
      id="pass"
      type="password"
      label="Password"
      defaultValue=""
      variant="outlined"
      focused
      inputProps={{ style: { fontFamily: 'nunito', color: 'blue',borderColor : 'red'}}}
    />

    <br /><br />
     <Button variant="contained"  color="Primary"  onClick={this.handleclick}>
    Login    
  </Button>
  <br /><br />
  <Button variant="contained"  color="secondary" onClick={this.clearclick}>
    Clear
  </Button>
  <br />
    <img src={logo} width="500" height="120" />
    <br />
      </div>
       </center>
       <br /><br /><br />.

    </div>
    );
  }
}

export default Login;
