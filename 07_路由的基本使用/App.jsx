import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import PubSub from "pubsub-js"
import Home from "./components/Home"
import About from "./components/About"


export default class App extends Component {

  state = {
    show: true
  }

  componentDidMount() {
    const _this = this;
    PubSub.subscribe('click', function (msg, data) {
      if (data == "/about") {
        _this.setState({
          show: true
        })
      } else {
        _this.setState({
          show: false
        })
      }
    })
  }

  render() {
    const { state: { show } } = this;
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <Link className={show ? 'list-group-item active' : "list-group-item"} to="/about">About</Link>
              <Link className={show ? 'list-group-item' : "list-group-item active"} to="/home">Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}