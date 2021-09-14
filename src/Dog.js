import React, { Component } from 'react'

export default class Dog extends Component {
    componentDidMount() {
        console.log("Dog did mount");
    }
    componentWillUnmount() {
        console.log("Dog will Unmount.")
    }
    render() {
        console.log("Dog Rendered.");
        return (
            <div>
                <h1>I am from Dog Component.</h1>
                <p>This dog is named : {this.props.name}</p>
            </div>
        )
    }
}
