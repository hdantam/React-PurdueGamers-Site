import React from 'react';
import './preview-item.scss';


const PreviewItem = ({displayName, summonerName, rank}) => (
    <div className='collection-item'>
        <div className = 'collection-footer'>
        <span className='firstName'>{displayName}</span>
        <span className='summonerName'>{summonerName}</span>
        </div>
    </div>
);

export default PreviewItem;