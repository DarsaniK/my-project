import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosEg extends Component {
      state={persons:[]}
      componentDidMount(){
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(rese=>{
        const persons=rese.data;
        this.setState({persons})
      })
    }
  render(){
    return (
      <>
      { this.state.persons.map(persons=><li key={persons.id}>{persons.value}</li>)}
      </>
    )
    }
}
