import React, { useState } from 'react'
import Button from './Button'
import ToggleSwitch from '../Switch/ToggleSwitch'
import FancyButton from './FancyButton'

const ButtonsIndex = () => {
    const [switchChecked, setSwitchChecked] = useState(false)
    const [smallSwitch, setSmallSwitch] = useState(false)

    return (
        <React.Fragment>
            <div className="index-options-container" style={{ marginTop: "5px" }}>
                <FancyButton>Fancy Button!</FancyButton>        
                <br></br>
                <h3>Toggle Switch</h3>
                <label htmlFor={"smallSwitch"}>
                    <span>Small?</span>
                    <input type="checkbox" name="smallSwitch" onChange={(e) => setSmallSwitch(!smallSwitch)}></input>
                </label>          
                <ToggleSwitch name="test" small={smallSwitch} yesText="Ok" noText="Nope" checked={switchChecked} onChange={() => setSwitchChecked(!switchChecked)} />
                {switchChecked && <h2>I am checked!</h2>}
            </div>
        </React.Fragment>
    )
}

export default ButtonsIndex