import React from 'react'
import './Styles/base.scss'

export interface SpinnerProps {
    color?: string
    size?: "sm" | "md" | "lg"
}

const Spinner = (props: SpinnerProps) => {
    let borderSize
    
    if (props.size === 'sm') borderSize = "0.25em"
    if (props.size === 'md') borderSize = "0.5em"
    if (props.size === 'lg') borderSize = "0.75em"

    const style: React.CSSProperties = {
        borderLeft: borderSize + " solid " + (props.color ?? "#2fc2baf5"),
        borderBottom: borderSize + " solid " + (props.color ?? "#2fc2baf5"),
        borderTop: borderSize + " solid " + (props.color ?? "#2fc2baf5"),
        borderRight: borderSize + " solid transparent"
    }

    return (
        <React.Fragment>
            <div className={"loading-spinner " + (props.size ?? "md")} style={style}></div>
        </React.Fragment>
    )
}

export default Spinner