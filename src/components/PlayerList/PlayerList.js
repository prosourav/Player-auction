import React, { useEffect, useState } from 'react';
import playerData from '../../fakedata/data.json'
import Player from '../Player/Player';
import PurchasedPlayer from '../PurchasedPlayer/PurchasedPlayer'
import './PlayerList.css'

console.log(playerData);
const PlayerList = () => {
    const [player,setPlayer] = useState([]);

    useEffect(()=>{
        setPlayer(playerData);
    },[]);
    return (
        <div className="players-container">
        <div className="player-container">
        {
            player.map(player=><Player player={player}></Player>)
        }
        </div>
        <div className="purchased-player">
        {
            <PurchasedPlayer></PurchasedPlayer>
        }
        </div>
        </div>
    );
};

export default PlayerList;