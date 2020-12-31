import React from 'react'
import './Styles/base.scss'

interface ButtonProps {
    name?: string
    text: string
    color?: string
    animate?: boolean
}

const Button = (props: ButtonProps) => {

    return (
        <div className="button-container">
            <button className={props.animate ? "button-custom animate" : "button-custom"} 
                    style={{ background: props.color ? props.color : "rgba(55, 226, 132, 0.8)" }}>
                <span className="button-text">{props.text}</span>
            </button>
        </div>
    )
}

export default Button