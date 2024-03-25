import React from 'react';
import Obiwan from '../media/obiwan.jpg';
import { NavigationBar } from '../widgets.js';

const componentStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

export default function PageNotFound() {
    return (
        <div style={componentStyle} id='page-not-found-container'>
            <img src={Obiwan} alt="Impossible. Perhaps the archives are incomplete." />
        </div>);
}
