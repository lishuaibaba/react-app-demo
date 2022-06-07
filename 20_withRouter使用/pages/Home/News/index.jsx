import React, { Component } from 'react'
import { Router } from 'react-router-dom/cjs/react-router-dom.min'

export default class News extends Component {

  componentDidMount(){
      setTimeout(()=>{
        this.props.history.push(`/home/message`)
        console.log("1");
      },2000)
  }
  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
