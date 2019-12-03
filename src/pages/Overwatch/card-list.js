import React from 'react';
import './card-list.scss'
import Card from './Card'
import './Card.scss'


export const CardList = (props) => {

    
    return <div className='card-list'>
                {props.collections && props.collections.map(lol => (
                    
                <Card key={lol.id} lol={lol} />
                 
         ))
         }
    
    
    </div>


}