import axios from 'axios'
import React, { Component } from 'react'

export default class Postexample extends Component {
    state={name:""}
    changeName=e=>{this.setState({name:e.target.value})}
    formSubmit=(event)=>{
        event.preventDefault();
        const users=this.state.name;
        axios.post(`https://jsonplaceholder.typicode.com/users`,{users})
        .then(res=>{
            console.log(res);
            console.lof(res.data);
        })
    }
    render(){
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <label>
    </label></form> Postexam</div>
  )
}