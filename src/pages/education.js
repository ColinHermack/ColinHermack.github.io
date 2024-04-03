import React from 'react';
import '../styles/education.css';
import { NavigationBar, FooterBar } from '../widgets.js';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let educationData = require('../data/education.json');
        console.log(educationData);
    }

    render() {
        return(
            <div id='eduation-container'>
                <NavigationBar />
                <h1>Education</h1>
                <FooterBar />
            </div>
        )
    }
}

export default Education;