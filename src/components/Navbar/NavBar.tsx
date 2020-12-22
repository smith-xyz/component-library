import React from 'react'
import './Styles/base.scss'

interface NavBarProps {
    logoText: string
}

interface NavItemProps {
    children?: JSX.Element | React.ReactChild | string
}

export const NavBar: React.FunctionComponent<NavBarProps> = props => {

    return (
        <React.Fragment>
            <div className="navbar-container">
                <nav>
                    <header>{props.logoText}</header>
                    <ul>
                        {props.children}
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
}

export const NavItem = (props: NavItemProps) => {

    return (
        <React.Fragment>
            <div>
                <li>{props.children}</li>
            </div>
        </React.Fragment>
        
    )
}