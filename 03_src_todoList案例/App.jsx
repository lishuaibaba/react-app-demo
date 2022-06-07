import React, { Component } from 'react'
import "./App.css"

import Add from "./components/Add"
import List from "./components/List"
import Footer from "./components/Footer"


export default class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        name: "吃饭",
        done: true
      },
      {
        id: 2,
        name: "睡觉",
        done: true
      },
      {
        id: 3,
        name: "打代码",
        done: false
      }
    ]
  }

  addTodos = (dataObj) => {
    const { todos } = this.state;
    const newTodos = [dataObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  removeLi = (data) => {
    console.log(data, "zzz");

    const { todos } = this.state;

    let newTodos = todos.filter((item) => {
      return item.id != data
    })

    this.setState({
      todos: newTodos
    })

  }

  changeChecked = (id, done) => {
    const { todos } = this.state;

    const arr = todos.map(item => {
      if (item.id == id) return { ...item, done }
      else return item
    })

    this.setState({ todos: arr })
  }

  checkAllTodo = (done) => {
    const { todos } = this.state;

    let newTodos = todos.map((item) => {
      return { ...item, done }
    })

    this.setState({
      todos: newTodos
    })
  }

  deleteAllTodo = () => {
    const { todos } = this.state;

    const newTodos = todos.filter((item) => {
      return item.done !== true
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add addTodos={this.addTodos} />
          <List todos={this.state.todos} removeLi={this.removeLi} changeChecked={this.changeChecked} />
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} deleteAllTodo={this.deleteAllTodo} />
        </div>
      </div>
    )
  }
}
