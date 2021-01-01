import React, { useState } from 'react'
import Spinner, { SpinnerProps } from './LoadingSpinner'

const SpinnerIndex = () => {
    const [color, setColor] = useState<SpinnerProps["color"]>(undefined)
    const [size, setSize] = useState<SpinnerProps["size"]>("md")
    const [transparent, setTransparent] = useState(false)

    return (
        <React.Fragment>
            <div className="index-options-container">
                <h1>Set different Props!</h1>
                <input type="text" placeholder="Type any CSS Color" onChange={(e) => setColor(e.target.value)}></input>
                <select value={size} onChange={e => setSize(e.target.value as SpinnerProps["size"])}>
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                </select>
                <label htmlFor={"transparent"}>
                    <span>Transparent?</span>
                    <input type="checkbox" name="transparent" onChange={(e) => setTransparent(!transparent)}></input>
                </label>  
            </div>
            <Spinner color={color} size={size} transparent={transparent}/>
        </React.Fragment>
    )
}

export default SpinnerIndex