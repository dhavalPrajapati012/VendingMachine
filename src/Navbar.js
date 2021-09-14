import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <NavLink exact activeClassName="act" to="/">Home</NavLink>
                <NavLink exact activeClassName="act" to="/chips">Chips</NavLink>
                <NavLink exact activeClassName="act" to="/soda">Soda</NavLink>
                <NavLink exact activeClassName="act" to="/sardines">Sardines</NavLink>
            </div>
        )
    }
}
