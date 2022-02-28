import React, {useState} from "react";
import './App.css';
import ToggleButton from "./components/toggle-button/ToggleButton";
import Card from './components/card/Card';
import data from "./data";

function App() {
    const [toggled, setToggled] = useState(true)

    return (
        <div className="section">
            <h1>Our Pricing</h1>
            <div className="switch-section">
                <span>Annually</span>
                <ToggleButton onChange={(e) => setToggled(e.target.checked)}/>
                <span>Monthly</span>
            </div>
            <div className="cards-section">
                {data.map((item, index) => <Card key={index} toggled={toggled} cardClass={`${index === 1 ? 'middle' : ''}`} item={item}/>)}
            </div>
        </div>
    );
}

export default App;
