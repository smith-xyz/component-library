import React, { useState } from 'react'
import Button from './Button'
import Switch from '../Switch/Switch'

const ButtonsIndex = () => {
    const [selectedButtton, setSelectedButton] = useState("Button 1")
    const [switchChecked, setSwitchChecked] = useState(false)
    const [smallSwitch, setSmallSwitch] = useState(false)
    const [color, setColor] = useState("")
    const [animated, setAnimated] = useState(false)

    return (
        <React.Fragment>
            <div className="index-options-container">
                <h1>Choose a button!</h1>
                <select value={selectedButtton} onChange={e => setSelectedButton(e.target.value)}>
                    <option>Button 1</option>
                    <option>Switch</option>
                </select>
                <input type="text" placeholder="Type any CSS Color" onChange={(e) => setColor(e.target.value)}></input>
                <label htmlFor={"animated"}>
                    <span>Animated?</span>
                    <input type="checkbox" name="animated" onChange={(e) => setAnimated(!animated)}></input>
                </label>                
                {selectedButtton.match('Switch') && 
                    <label htmlFor={"smallSwitch"}>
                        <span>Small?</span>
                        <input type="checkbox" name="smallSwitch" onChange={(e) => setSmallSwitch(!smallSwitch)}></input>
                    </label>}            
                {selectedButtton.match('Button') && <Button animate={animated} text="Button!" name={selectedButtton.split(' ').reverse()[0]} color={color} />}
                {selectedButtton.match('Switch') && <Switch name="test" small={smallSwitch} yesText="Ok" noText="Nope" checked={switchChecked} onChange={(e) => setSwitchChecked(!switchChecked)} />}
                {switchChecked && <h2>I am checked!</h2>}
            </div>
        </React.Fragment>
    )
}

export default ButtonsIndex