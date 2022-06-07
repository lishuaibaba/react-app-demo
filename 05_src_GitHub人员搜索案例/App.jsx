import React, { Component } from 'react'
import Search from "./components/Search"
import List from "./components/List"
import axios from "axios"

export default class App extends Component {
  state = {
    headerList: [],
    aShow: false
  }

  getList = (data) => {
    if (data == "") return;
    this.setState({
      aShow: true
    })
    axios.get(`http://localhost:3000/api/search/users?q=${data}`)
      .then(res => {
        console.log(res);
        this.setState({
          headerList: res.data.items,
          aShow: false
        })
      })
      .catch(err => { })
  }

  render() {
    const { headerList, aShow } = this.state;
    return (
      <div className="container">
        <Search getList={this.getList} />
        <List headerList={headerList} aShow={aShow} />
      </div>
    )
  }
}
