import React, { Component } from 'react'
import PubSub from "pubsub-js"


export default class Home extends Component {
  componentDidMount() {
    PubSub.publish('click', this.props.location.pathname)
  }
  render() {
    return (
      <h3>我是Home的内容</h3>
    )
  }
}
