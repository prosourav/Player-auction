import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props.player)
    const {name,picture,salary} = props.player;
    return (
        <div className="player">
            <img src={picture} alt=""/>
            <h1>Name :{name}</h1>
            <h2>Salary :{salary}</h2>
            <button onClick={()=>props.handlePurchase(props.player)}> <FontAwesomeIcon icon={faPlusSquare} /> Buy</button>
        </div>
    );
};

export default Player;
