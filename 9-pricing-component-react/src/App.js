import React, {useState} from "react";
import './App.css';
import ToggleButton from "./components/toggle-button/ToggleButton";

function App() {
    const [toggled, setToggled] = useState(true)

    console.log(toggled)
    return (
        <div className="App">
            <h1>Our Pricing</h1>
            <div>
                <span>Annually</span>
                <ToggleButton onChange={(e) => setToggled(e.target.checked)}/>
                <span>Monthly</span>
            </div>
        </div>
    );
}

export default App;
