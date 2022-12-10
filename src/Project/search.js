import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './search.css';

class Search extends Component {
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
	<div class="container"></div>
	<img class="pic1" src="image 18.png"></img>
	<div class="container2"></div>
	<img class="pic2" src="image 19.png"></img>
	<div class="container3"></div>
	<img class="pic3" src="image 21.png"></img>
	<div class="container4"></div>
	<img class="pic4" src="image 24.png"></img>
	<img class="logo" src="loggo.png"></img>
	<img class="simple" src="heading.png"></img>
	<img class="cont" src="continent.png"></img>
	<img class="ind" src="indian.png"></img>
	<img class="des" src="dessert.png"></img>
	<img class="bev" src="bever.png"></img>
    </div>
    )
    }
}
export default Search;