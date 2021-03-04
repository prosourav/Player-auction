import React from 'react';
import './PurchasedPlayer.css';

const PurchasedPlayer = (props) => {
    // console.log("from cart",props.purchased);
    const number = props.purchased;
    const total = number.reduce((total,plr)=>total + plr.salary, 0);
    return (
        <div className="container">
            <h2>No of Purchased player: {number.length} </h2>
            <h3>Total cost of players:{total} </h3>
        </div>
    );
};

export default PurchasedPlayer;