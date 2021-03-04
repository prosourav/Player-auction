import React, { useEffect, useState } from 'react';
import playerData from '../../fakedata/data.json';
import Player from '../Player/Player';
import PurchasedPlayer from '../PurchasedPlayer/PurchasedPlayer';
import './PlayerList.css';

console.log(playerData);
const PlayerList = () => {
    const [player,setPlayer] = useState([]);
    const [purchasedList,setPurchaseList] = useState([]);
    const handlePurchase=(player)=>{
      const newPurchaseList = [...purchasedList,player];
      setPurchaseList(newPurchaseList);
    }
    
    useEffect(()=>{
        setPlayer(playerData);
    },[]);
    return (
        <div className="players-container">
        <div className="player-container">
        {
            player.map(player=><Player player={player} handlePurchase={handlePurchase} key={player.index}> </Player>)
        }
        </div>
        <div className="purchased-player">
        {
            <PurchasedPlayer purchased={purchasedList}></PurchasedPlayer>
        }
        </div>
        </div>
    );
};

export default PlayerList;