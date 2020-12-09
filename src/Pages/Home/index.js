/**
*   Page Home 
**/

import React from 'react';
import { Banner } from './../../Components/Banner';
import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            <Banner/>
            <h1>Home!!</h1>
        </div>
    );
}
