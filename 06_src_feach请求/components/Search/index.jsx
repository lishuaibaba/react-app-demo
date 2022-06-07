import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {

    getHeadeList = () => {
        const {search:{value}} = this;
        if (value == "") return;
        PubSub.publish("getInput",value);
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索 Github 用户</h3>
                <div>
                    <input type="text" ref={a => this.search = a} placeholder="输入github用户名称" />&nbsp;<button onClick={this.getHeadeList}>搜索</button>
                </div>
            </section>
        )
    }
}
