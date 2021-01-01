import React from 'react'
import { NavBar, NavItem } from './NavBar'
import { Link } from 'react-router-dom'

//example of how to use
const CustomNavBar = () => {
    return (
        <div>
            <NavBar>
                <NavItem>
                    <Link to={"/"} style={{ textDecoration: 'none' }}>Home</Link>
                </NavItem>
                <NavItem>
                    <Link to={"/tables"} style={{ textDecoration: 'none' }}>Tables</Link>
                </NavItem>
                <NavItem>
                    <Link to={"/buttons"} style={{ textDecoration: 'none' }}>Buttons</Link>
                </NavItem>
                <NavItem>
                    <Link to={"/forms"} style={{ textDecoration: 'none' }}>Forms</Link>
                </NavItem>
                <NavItem>
                    <Link to={"/spinners"} style={{ textDecoration: 'none' }}>Spinners</Link>
                </NavItem>
            </NavBar>
        </div>
    )
}

export default CustomNavBar