import React from 'react';
import '../styles/home.css';
import { NavigationBar } from '../widgets.js';

class Home extends React.Component {

    render() {
        return (
            <div id='home-container'>
                <NavigationBar />
                Hello World
            </div>
        )
    }
}

export default Home;
