import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./VendingMachine.css"
import Machine from "./Vendingmachine.jfif"

export default class VendingMachine extends Component {
    render() {
        return (
            <>
                <div className="relative">
                    <img src={Machine} alt="VendingMachine" className="machine" />
                </div>
                <div className="absolute2">
                    <p>Hello I am Vending Machine. What would you like to Eat?</p>
                </div>
                <div className="absolute">
                    <nav>
                        <Link exact to="/soda">Soda</Link>
                        <Link exact to="/chips">Chips</Link>
                        <Link exact to="/sardines">Sardines</Link>
                    </nav>
                </div>
            </>
        )
    }
}
