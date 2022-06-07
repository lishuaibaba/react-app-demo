import React, { Component } from 'react'
import axios from "axios"


export default class index extends Component {

  async componentDidMount(){
    let a = await axios.get("http://localhost:3000/api1/search/users2");
    console.log(a);
  }

  render() {
    return (
      <div>
        index
      </div>
    )
  }
}
