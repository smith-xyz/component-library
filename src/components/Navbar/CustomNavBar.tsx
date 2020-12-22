import React from 'react'
import { NavBar, NavItem } from './NavBar'

//example of how to use
const CustomNavBar = () => {
    return (
        <div>
            <NavBar logoText="Test">
                <NavItem>Test 1</NavItem>
                <NavItem>Test 2</NavItem>
                <NavItem>Test 3</NavItem>
                <NavItem>Test 4</NavItem>
            </NavBar>
        </div>
    )
}

export default CustomNavBar