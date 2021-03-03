import React from 'react';
import './Player.css'

const Player = (props) => {
    // console.log(props.player)
    const {name,picture,salary} = props.player;
    return (
        <div className="player">
            <img src={picture} alt="" />
            <h1>Name :{name}</h1>
            <h2>Salary :{salary}</h2>
            <button>Buy</button>
        </div>
    );
};

export default Player;