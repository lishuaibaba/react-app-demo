import React, { Component } from 'react'
import qs from "querystring"

const detailData = [
    {
        id: "1",
        text: "你好，代码人"
    }, {
        id: "2",
        text: "你好，嗨嗨"
    }, {
        id: "3",
        text: "你好，未来的自己"
    }
]

export default class Detail extends Component {
    render() {
        let str = this.props.location.search;
        str = str.split("?")[1];
        let {id,title} = qs.parse(str);
        const data = detailData.find(item=>{
            return item.id == id
        })

        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{data.text}</li>
            </ul>
        )
    }
}
