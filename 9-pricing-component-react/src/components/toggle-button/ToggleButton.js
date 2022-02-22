import React from 'react';
import './ToggleButton.css'

function ToggleButton({onChange}) {
    return (
            <label className="switch">
                <input type="checkbox" onChange={onChange} defaultChecked={true}/>
                <span className="slider round"/>
            </label>
    );
}

export default ToggleButton;