import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cock from "./Cocacola.png"
import "./Soda.css"

export default class Soda extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <div className="cock">
                        <img id="rotate" src={Cock} alt="CocacolaImage" />
                    </div>
                    <div className="content">
                        <p>Omg Sugar</p>
                        <Link exact to="/">Go Back</Link>
                    </div>
                    <div className="cock">
                        <img id="rotate" src={Cock} alt="CocacolaImage" />
                    </div>
                </div>
            </>
        )
    }
}
