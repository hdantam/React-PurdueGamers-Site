import React from 'react';

import './preview-styles.scss'
import PreviewItem from '../preview-item/preview-item'

const PlayerPreview = ({title, items}) => (

    <div className = 'collection-preview'>
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(({id, ...otherItemProps})=> (
                    <PreviewItem key={id}{... otherItemProps}/>
                ))}
        </div>
    </div>
);

export default PlayerPreview;