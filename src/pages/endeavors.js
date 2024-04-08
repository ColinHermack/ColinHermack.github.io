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
                    <a href='../trip-recaps'><div className='endeavor-item'>
                        <div className='endeavor-title'>Trip Recaps</div>
                        <div className='endeavor-description'>Summaries and photos of trips I've been on.</div>
                    </div></a>
                    <a href='../stuff'><div className='endeavor-item'>
                        <div className='endeavor-title'>Stuff</div>
                        <div className='endeavor-description'>A list of things I own that I think are cool and related nerd stats.</div>
                    </div></a>
                    <a href='../blog'><div className='endeavor-item'>
                        <div className='endeavor-title'>Blog</div>
                        <div className='endeavor-description'>Writings about things I find interesting.</div>
                    </div></a>
                </div>
                <FooterBar />
            </div>
        )
    }
}

export default Endeavors;