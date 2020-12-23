import React, { useState } from 'react'
import Spinner from './LoadingSpinner'

const SpinnerIndex = () => {

    return (
        <React.Fragment>
            <div className="index-options-container">
                <h1>Set different Props!</h1>
            </div>
            <Spinner />
        </React.Fragment>
    )
}

export default SpinnerIndex