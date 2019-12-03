
import React from 'react';
import './Card.scss'

const Card = ({displayName,summonerName,rank}) => (
    <div className="w3-panel" style={{width:'400px'}}>
    <header className="w3-container w3-grey">
      <h1><b>{displayName}</b></h1>
    </header>
    
    <div className="w3-container w3-border">
      <p><b>Summoner Name:</b> {summonerName}</p>
      <p><b>Rank:</b> {rank}</p>
    </div>
    
    <footer className="w3-container w3-grey" >
      <h5><button class="w3-button w3-white w3-hover-grey">Contact</button></h5>
    </footer>
    
    </div>
)

export default Card;