import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Video from "./sardines.gif"
import "./Sardines.css"

export default class Sardines extends Component {
    render() {
        return (
            <>
                <div className="video">
                    <img src={Video} alt="Gif" width="100%" height="717px" />
                </div>
                <div className="abs">
                    <div className="link">
                        <p>You Don't Eat the Sardines. The Sardines, they Eat You!</p>
                        <Link exact to="/">Go Back</Link>
                    </div>
                </div>
            </>
        )
    }
}
