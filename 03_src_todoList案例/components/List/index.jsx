import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./index.css"

import Item from "../Item"

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    removeLi: PropTypes.func.isRequired,
    changeChecked: PropTypes.func.isRequired
  }

  state = {

  }

  render() {
    const { todos, changeChecked, removeLi } = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return <Item changeChecked={changeChecked} removeLi={removeLi} key={item.id} list={item} />
          })
        }
      </ul>
    )
  }
}