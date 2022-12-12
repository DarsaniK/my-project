import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './Loginn.css';

class Login extends Component {
render() {
	const myStyle={
		height:'110vh',
		marginTop:'-30px',
		fontSize:'5px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
  };
	return (
    <div style={myStyle}>
  <center>
  <form>
  <img class="logo" src="loggo.png"></img>
  <div class="container">
  <center><font color="#084754"><font size="7">
  <font face="kadwa"><div class="top"><b>LOGIN</b></div></font></font></font></center>
  <hr></hr><br></br><br></br><br></br>
  <img class="img" src="image 5.png" width="50px"  height="50px" />
  <center><input type="text" placeholder="Enter username or email " name="username" required /></center><br></br><br></br><br></br>
  <center><font size="5">Password</font></center>
  <div class="container1">
  
  <center><input type="password" placeholder="Enter password" name="password" required /></center></div>
  <font color="#084754"><font face="kadwa"><font size="3"><div class="bottom"><b>Forget password?</b></div></font></font></font><br></br><br></br><br></br><br></br><br></br>
  <br></br><br></br><br></br>
  <button type="submit"><font face="kadwa">LOG IN</font></button><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <font face="Bree Serif"><font size="6.2"><font color="#082F54"><b>Not An User?<font color="1982A4">Sign Up</font></b></font></font></font></div>
  </form>
  </center>
	</div>
	);
}
}

export default Login;
