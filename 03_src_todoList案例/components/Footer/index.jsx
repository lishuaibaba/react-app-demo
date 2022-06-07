import React, { Component } from 'react'
import "./index.css"

export default class Operate extends Component {

  state = {

  }

  upInputCheck = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }

  render() {
    const { todos, deleteAllTodo } = this.props;
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0)
    }, 0)
    return (
      <div className="todo-footer">
        <label>
          <input onChange={(event) => this.upInputCheck(event)} type="checkbox" checked={doneCount == todos.length && todos.length != 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部( {todos.length} )
        </span>
        <button className="btn btn-danger" onClick={deleteAllTodo}>清除已完成任务</button>
      </div>
    )
  }
}
