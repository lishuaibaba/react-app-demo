import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class index extends Component {

    back = ()=>{
        this.props.history.goBack();
    }

    forward = ()=>{
        this.props.history.goForward();
    }

    render() {
        const { back, forward, go } = this;
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={back}>后退</button>&nbsp;&nbsp;&nbsp;
                <button onClick={forward}>前进</button>&nbsp;&nbsp;&nbsp;
                <button onClick={go}>go</button>
            </div>
        )
    }
}

export default withRouter(index);
