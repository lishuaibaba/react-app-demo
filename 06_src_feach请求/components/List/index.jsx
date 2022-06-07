import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from "axios"

import "./index.css"

export default class List extends Component {

    state = {
        aShow: false,
        users: [],
        err: ""
    }


    getInputData = async (msg, data) => {
        // this.setState({
        //     aShow: true
        // })
        // axios.get(`/api/search/users?q=${data}`).then(
        //     res => {
        //         this.setState({
        //             users: res.data.items,
        //             aShow: false
        //         })
        //     },
        //     err => {
        //         this.setState({
        //             err: err.message
        //         })
        //     }
        // )

        try {
            const req = await fetch(`/api/search/users2?q=${data}`);
            const res = await req.json();
            console.log(res);
            
        } catch (error) {
            console.log(error)
        }


    }

    componentDidMount() {
        PubSub.subscribe("getInput", this.getInputData)
    }

    render() {
        const { state: { aShow, users, err } } = this;
        return (
            <div>
                <div className="row">
                    {
                        aShow === false && users.length == 0 ? <h3>欢迎光临</h3> :
                        aShow === true ? <h3>数据加载中，请稍后......</h3> :
                        err != "" ? <h3 className='123'>{err}</h3> : 
                        users.map(item => {
                            return (
                                <div className="card" key={item.id}>
                                    <a href={item.html_url} target="_blank">
                                        <img src={item.avatar_url} style={{ width: '100px' }} />
                                    </a>
                                    <p className="card-text">{item.login}</p>
                                </div>
                            )
                        })

                    }
                </div>
            </div >
        )
    }
}

