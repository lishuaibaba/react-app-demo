import React, { Component } from 'react'
import PubSub from "pubsub-js"


export default class About extends Component {

    componentDidMount(){
        PubSub.publish('click',this.props.location.pathname)
    }

    render() {
        return (
            <h3>我是About的内容</h3>
        )
    }
}
