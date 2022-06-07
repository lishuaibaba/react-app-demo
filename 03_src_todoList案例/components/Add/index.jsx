import React, { Component } from 'react'
import PropTypes from "prop-types"
import { nanoid } from 'nanoid';
import './index.css'


export default class Add extends Component {

  static propTypes = {
    addTodos:PropTypes.func.isRequired
  }


  enterData = (event) => {
    const { keyCode, target } = event;
    if (keyCode != "13") return;

    if (target.value.trim() == "") {
      alert("输入不能为空");
      return;
    }
    let todo = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addTodos(todo);
    target.value = "";
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.enterData} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
