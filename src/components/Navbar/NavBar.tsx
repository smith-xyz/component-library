import React from 'react'
import './Styles/base.scss'

interface NavBarProps {

}

interface NavItemProps {
    children?: JSX.Element | React.ReactChild | string
}

export const NavBar: React.FunctionComponent<NavBarProps> = props => {

    return (
        <React.Fragment>
            <div className="navbar-container">
                <div>
                    <nav>
                        <ul>
                            {props.children}
                        </ul>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}

export const NavHeader = (props: NavItemProps) => (
    <React.Fragment>
        <header>{props.children}</header>
    </React.Fragment>
)

export const NavItem = (props: NavItemProps) => (
    <React.Fragment>
        <li>{props.children}</li>
    </React.Fragment>
)