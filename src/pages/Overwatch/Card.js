
import React from 'react';
import './Card.scss'

const Card = (props) => (
  <div className = 'card-container'>
    <div className="w3-panel" style={{width:'400px'}}>
    <header className="w3-container w3-grey">
      <h1><b>{props.lol.displayName}</b></h1>
    </header>
    
    <div className="w3-container w3-border">
      <p><b>Battle Tag:</b> {props.lol.BattleTag}</p>
      <p><b>Rank:</b> {props.lol.rank}</p>
    </div>
    
    <footer className="w3-container w3-grey" >
      <h5><button className="w3-button w3-white w3-hover-grey">Contact</button></h5>
    </footer>
    
    </div>
    </div>
)

export default Card;