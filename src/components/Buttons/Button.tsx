import React from 'react'
import './Styles/base.scss'

interface ButtonProps {
    name?: string
    text: string
}

const Button = (props: ButtonProps) => {
    const buttonType = props.name ? "button-custom-" + props.name : "button-custom-1"

    return (
        <div>
            <button className={buttonType}>{props.text}</button>
        </div>
    )
}

export default Button