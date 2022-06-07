import React, { Component } from "react"
import hello from "./index.module.css"

export default class Welcom extends Component {
    render() {
        return (
            <h1 className={hello.title}>
                Welcom
            </h1>
        )
    }
}