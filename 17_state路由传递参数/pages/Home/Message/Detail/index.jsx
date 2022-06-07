import React, { Component } from 'react'

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
        
        const {id,title} = this.props.location.state;

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
