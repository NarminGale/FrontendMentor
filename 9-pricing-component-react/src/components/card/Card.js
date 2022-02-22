import React from 'react';
import './Card.css'
function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Basic</h4>
                <p><span>$</span>19.99</p>
            </div>
            <div className="card-body">
                <ul>
                    <li>500GB Storage</li>
                    <li>2 Users Allowed</li>
                    <li>Send up to 3 Gb</li>
                </ul>
            </div>
            <div className="card-footer">
                <button type="button" className="card-button">
                    learn more
                </button>
            </div>
        </div>
    );
}

export default Card;