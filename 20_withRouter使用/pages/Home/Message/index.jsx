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

  pushClick = (id, title) => {
    {/* params传递 */ }
    this.props.history.push(`/home/message/detail/${id}/${title}`);

    {/* search传递 */ }
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

    {/* state传递 */ }
    // this.props.history.push(`/home/message/detail/`, { id, title });

  }


  replaceClick = (id, title) => {
    return () => {
      {/* params传递 */ }
      this.props.history.replace(`/home/message/detail/${id}/${title}`);

      {/* search传递 */ }
      // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

      {/* state传递 */ }
      // this.props.history.replace(`/home/message/detail/`, { id, title });
    }
  }

  back = () => {
    this.props.history.goBack();
  }

  foward = () => {
    this.props.history.goForward();
  }

  go = ()=>{
    this.props.history.go(-2);
  }

  render() {
    const { pushClick, replaceClick, back, foward,go } = this;
    return (
      <div>
        <ul>
          {
            this.state.arr.map(item => {
              return (
                <li key={item.id}>
                  {/* params传递 */}
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>


                  {/* search传递  */}
                  {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                  {/* state接收  */}
                  {/* <Link to={{ pathname: "/home/message/detail", state: { id: item.id, title: item.title } }}>{item.title}</Link> */}
                  &nbsp;&nbsp;&nbsp;<button onClick={() => pushClick(item.id, item.title)}>按钮push</button>
                  &nbsp;&nbsp;&nbsp;<button onClick={replaceClick(item.id, item.title)}>按钮replace</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* params接收  */}
        <Route path="/home/message/detail/:id/:title/" component={Detail}></Route>

        {/* search接收  */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        {/* state接收  */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        <button onClick={back}>后退</button>
        <button onClick={foward}>前进</button>
        <button onClick={go}>go</button>
      </div>

    )
  }
}
