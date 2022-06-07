import React, { Component } from 'react'
import "./index.css"

export default class List extends Component {
    render() {
        const { props: { headerList, aShow } } = this;
        console.log(aShow);
        return (
            <div>
                <h3 className={aShow ? "show" : "active"}>用户数据加载中.......</h3>
                <h3 className={headerList.length == 0 && aShow == false ? 'show' : 'active'}>欢迎您来搜索用户信息</h3>
                <div className="row">
                    {
                        headerList.map(item => {
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

