import React from 'react';
import '../styles/endeavors.css';
import { NavigationBar, FooterBar } from '../widgets.js';

class Endeavors extends React.Component {
    render() {
        return(
            <div id='endeavors-container'>
                <NavigationBar />
                <h1>Endeavors</h1>
                <h2>A catch-all for random stuff that I thought would be interesting to add to this website.</h2>
                <div id='menu-items-container'>
                    <a href='#/trips'><div className='endeavor-item'>
                        <div className='endeavor-title'>Trip Logs</div>
                        <div className='endeavor-description'>Summaries and photos of trips I've been on.</div>
                    </div></a>
                    {/*}
                    <a href='../blog'><div className='endeavor-item'>
                        <div className='endeavor-title'>Blog</div>
                        <div className='endeavor-description'>Writings about things I find interesting.</div>
                    </div></a>
                    {*/}
                </div>
                <FooterBar />
            </div>
        )
    }
}

export default Endeavors;