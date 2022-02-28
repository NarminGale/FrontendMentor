import React from 'react';
import './Card.css'
function Card(props) {
    let cardClass = props.cardClass
    let toggled = props.toggled
    const {head, price, storage, allowed_users, send} = props.item
    console.log(props.toggled)

    return (
        <div className={`card ${cardClass ? cardClass : ''}`}>
            <div className="card-header">
                <h4>{head}</h4>
                <p><span>$</span>{toggled ? price : ((price * 12) - 49.89)}</p>
            </div>
            <div className="card-body">
                <ul>
                    <li>{`${storage} Storage`}</li>
                    <li>{`${allowed_users} Users Allowed`}</li>
                    <li>{`Send up to ${send}`}</li>
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