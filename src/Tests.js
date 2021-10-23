import React from 'react';
import './App.css';
import logo from './logo.png';
import Police from './Police';
import TextField from '@material-ui/core/TextField';
import security from './security.png';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {Divider,Grid,Segment,Icon,Header} from 'semantic-ui-react';
import Button from '@mui/material/Button';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import Chip from '@material-ui/core/Chip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box';
import FormControl  from '@material-ui/core/FormControl';
import Bulb from 'react-bulb';
import s1 from "./s-01.png";
import s2 from "./s-02.png";
import s3 from "./s-03.png";
import s4 from "./s-04.png";
import s5 from "./s-05.png";
import s6 from "./s-06.png";


class Tests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      today:new Date(),
      s1g : "black",
      s1r : "black",
      s2g : "black",
      s2r : "black",
      s3g : "black",
      s3r : "black",
      s4g : "black",
      s4r : "black",
      s5g : "black",
      s5r : "black",
      s6g : "black",
      s6r : "black",
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    setInterval(() =>{
      this.getdata();
    },3000);
    setInterval(() =>{
      this.cleardata();
    },30000);
  }
  getdata = () => {
    fetch('http://localhost:5000/gettrigger',{
   method: 'GET',
}).then((response) => response.json())
  .then((responseData) => {
    if(responseData["s1"] == 0)
    {
      this.setState({s1g:"green"});
      this.setState({s1r:"black"});
    }
    if(responseData["s1"] == 1)
    {
      this.setState({s1g:"black"});
      this.setState({s1r:"red"});
    }
    if(responseData["s2"] == 0)
    {
      this.setState({s2g:"green"});
      this.setState({s2r:"black"});
    }
    if(responseData["s2"] == 1)
    {
      this.setState({s2g:"black"});
      this.setState({s2r:"red"});
    }
    if(responseData["s3"] == 0)
    {
      this.setState({s3g:"green"});
      this.setState({s3r:"black"});
    }
    if(responseData["s3"] == 1)
    {
      this.setState({s3g:"black"});
      this.setState({s3r:"red"});
    }
    if(responseData["s4"] == 0)
    {
      this.setState({s4g:"green"});
      this.setState({s4r:"black"});
    }
    if(responseData["s4"] == 1)
    {
      this.setState({s4g:"black"});
      this.setState({s4r:"red"});
    }
    if(responseData["s5"] == 0)
    {
      this.setState({s5g:"green"});
      this.setState({s5r:"black"});
    }
    if(responseData["s5"] == 1)
    {
      this.setState({s5g:"black"});
      this.setState({s5r:"red"});
    }
    if(responseData["s6"] == 0)
    {
      this.setState({s6g:"green"});
      this.setState({s6r:"black"});
    }
    if(responseData["s6"] == 1)
    {
      this.setState({s6g:"black"});
      this.setState({s6r:"red"});
    }
    console.log(responseData["s1"]);
    
      
    
  }).catch((error) => {
    console.log(error);
  });
 }
 cleardata = () => {
  fetch('http://localhost:5000/clear',{
 method: 'GET',
}).then((response) => response.json())
.then((responseData) => {
  
}).catch((error) => {
  console.log(error);
});
}
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div className='logincontainer'>
      <Police />
      <center>
      <br /><br /> <br />
      <div className="App-header" style={{width:"1050px",borderRadius:"20px"}}> 
      <br />
      
	<div class="inline">
    <br /><br />
	<table>
	<tr>
	<td>
	<div class="inline" style={{backgroundColor:"#292929",width:"200px",height:"210px",borderRadius:"20px",Float:"left"}}>
<br />
<center>
  <img src={s1} width="100" height="50" />
  <br />
	<Bulb
    size={30}
    color={this.state.s1g}
  /> &nbsp;
<Bulb
    size={30}
    color={this.state.s1r}
  />
<br /> <br />
 <Button color="secondary" variant="contained" endIcon={<CameraEnhanceIcon />}>
        View
      </Button>
      </center>
</div>
</td>
<td>
<div class="inline" style={{backgroundColor:"#292929",width:"200px",height:"210px",borderRadius:"20px",Float:"left"}}>
<br />
<center>
<img src={s2} width="100" height="50" />
<br />
	<Bulb
    size={30}
    color={this.state.s2g}
  /> &nbsp;
<Bulb
    size={30}
    color={this.state.s2r}
  />
<br /> <br />
 <Button color="secondary" variant="contained" endIcon={<CameraEnhanceIcon />}>
        View
      </Button>
      </center>
</div>
</td>
<td>
<div class="inline" style={{backgroundColor:"#292929",width:"200px",height:"210px",borderRadius:"20px",Float:"left"}}>
<br />
<center>
<img src={s3} width="100" height="50" />
<br />
	<Bulb
    size={30}
    color={this.state.s3g}
  /> &nbsp;
<Bulb
    size={30}
    color={this.state.s3r}
  />
<br /> <br />
 <Button color="secondary" variant="contained" endIcon={<CameraEnhanceIcon />}>
        View
      </Button>
      </center>
</div>
</td>
</tr>
<tr>
<td>
<div class="inline" style={{backgroundColor:"#292929",width:"200px",height:"210px",borderRadius:"20px",Float:"left"}}>
<br />
<center>
<img src={s4} width="100" height="50" />
<br />
	<Bulb
    size={30}
    color={this.state.s4g}
  /> &nbsp;
<Bulb
    size={30}
    color={this.state.s4r}
  />
<br /> <br />
 <Button color="secondary" variant="contained" endIcon={<CameraEnhanceIcon />}>
        View
      </Button>
      </center>
</div>
</td>
<td>
<div class="inline" style={{backgroundColor:"#292929",width:"200px",height:"210px",borderRadius:"20px",Float:"left"}}>
<br />
<center>
<img src={s5} width="100" height="50" />
<br />
	<Bulb
    size={30}
    color={this.state.s5g}
  /> &nbsp;
<Bulb
    size={30}
    color={this.state.s5r}
  />
<br /> <br />
 <Button color="secondary" variant="contained" endIcon={<CameraEnhanceIcon />}>
        View
      </Button>
      </center>
</div>
</td><td>
<div class="inline" style={{backgroundColor:"#292929",width:"200px",height:"210px",borderRadius:"20px",Float:"left"}}>
<br />
<center>
<img src={s6} width="100" height="50" />
<br />
	<Bulb
    size={30}
    color={this.state.s6g}
  /> &nbsp;
<Bulb
    size={30}
    color={this.state.s6r}
  />
<br /> <br />
 <Button color="secondary" variant="contained" endIcon={<CameraEnhanceIcon />}>
        View
      </Button>
      </center>
</div>
</td>
</tr>
</table>
<br /><br /><br /> 
      </div>

	</div>
       <br /><br /><br /> <br /><br /> <br />
</center>
    </div>
    );
  }
}

export default Tests;