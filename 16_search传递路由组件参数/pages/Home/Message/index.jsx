import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    arr: [
      {
        id: 1,
        title: "消息1"
      },
      {
        id: 2,
        title: "消息2"
      },
      {
        id: 3,
        title: "消息3"
      }
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.arr.map(item => {
              return (
                <li key={item.id}>

                  {/* params传递 <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
                
                  <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* params接收 <Route path="/home/message/detail/:id/:title/" component={Detail}></Route> */}
        {/* search接收  */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>

    )
  }
}
