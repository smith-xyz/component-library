import React from 'react'
import './Styles/base.scss'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav>
                <ul className="navbar--link">
                    <li>Tables</li>
                    <li>Buttons</li>
                    <li>Selects</li>
                    <li>Spinners</li>
                    <li>Modals</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar