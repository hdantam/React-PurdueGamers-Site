import React from 'react';
import './homepage.styles.scss';
import Directory from '../components/directory/directory';

const HomePage = () => (
    <div className = 'homepage'>
        <h1 className='titletitle'><img style={{height: '50px', width: '80px'}} src="https://www.purdue.edu/brand/images/applications/Motion_P.png" alt="purdue logo"/>Welcome to Purdue Gamers Connect</h1>
        <Directory/>
    </div>
);

export default HomePage;