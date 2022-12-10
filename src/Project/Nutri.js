import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './Nutri.css';

class Nutri extends Component {
render() {
	const myStyle={
		height:'140vh',
		marginTop:'-10px',
		fontSize:'5px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
  };
	return (
    <div style={myStyle}>
    <div class="arrow"><img src="back.png" width="40px"></img></div>
    <img class="logo" src="loggo.png"></img>
    <div class="container">
    <img class="look" src="Look.png" width="50px"></img>
    <div class="cont"><font size="6"><font color= "#084754">
    <font face="kadwa"><b>NUTRITION INFO</b></font></font></font></div>
    <center><font size="6"><font face="kadwa">
    <div class="text">Calories: 329kcal | Carbohydrates: 25g | Protein: 24g | Fat: 12g | Cholesterol: 43mg | Sodium: 1270mg | Potassium: 651mg | Fiber: 2g | Sugar: 1g | Vitamin A: - | Vitamin C: 3mg | Calcium: 85mg | Iron: 4mg</div>
    </font></font></center>
    </div></div>
    )
    }
}
export default Nutri;