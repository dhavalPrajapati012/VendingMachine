import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Lays from "./LaysChips.png"
import "./Chips.css"

export default class Chips extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            chipsPackets: []
        }
    }
    change = () => {
        let angle = Math.random() * 180 - 10;
        let xPos = Math.random() * (Math.random() * 1250);
        let yPos = Math.random() * (Math.random() * 400);
        // let transform = `translate(${xPos}px,${yPos}px) rotate(${angle}deg)`
        this.setState({
            count: this.state.count + 1,
            chipsPackets: [
                ...this.state.chipsPackets,
                { angle, xPos, yPos }
            ]
        })
    }
    render() {
        return (
            <>
                <div className="hero">
                    <div style={{ position: 'relative' }}>
                        <div className="contain">
                            <div className="chipsMain">
                                <p>Bags Eaten : {this.state.count}</p>
                                <button type="button" class="btn btn-danger" onClick={() => this.change()}>Get More!</button>
                                <Link exact to="/">Go Back</Link>
                            </div >
                        </div >
                        <div className="image_content">
                            {this.state.chipsPackets.length > 0 && this.state.chipsPackets.map((chipsData) => (
                                <img
                                    style={{ top: `${chipsData.yPos}px`, left: `${chipsData.xPos}px` }}
                                    className="chips"
                                    src={Lays}
                                    alt="ChipsImage"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
