import React from 'react'

import './Styles/FancyButton.scss'

const FancyButton = (props: React.HTMLProps<HTMLButtonElement>) => (
    <button className="fancy-button" onClick={props.onClick} disabled={props.disabled}>
        {props.children}
    </button>
)

export default FancyButton