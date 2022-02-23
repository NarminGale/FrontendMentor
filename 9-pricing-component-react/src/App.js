import React, {useState} from "react";
import './App.css';
import ToggleButton from "./components/toggle-button/ToggleButton";
import Card from './components/card/Card'
function App() {
    const [toggled, setToggled] = useState(true)

    console.log(toggled)
    return (
        <div className="section">
            <h1>Our Pricing</h1>
            <div className="switch-section">
                <span>Annually</span>
                <ToggleButton onChange={(e) => setToggled(e.target.checked)}/>
                <span>Monthly</span>
            </div>
            <div className="cards-section">
                <Card/>
                <Card cardClass="middle"/>
                <Card/>
            </div>
        </div>
    );
}

export default App;
