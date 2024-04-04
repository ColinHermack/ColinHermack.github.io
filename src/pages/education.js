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
        this.setState({education: educationData});
    }

    render() {
        if (this.state.education) {
            return(
                <div id='education-container'>
                    <NavigationBar />
                    <h1>Education</h1>
                    <h2>A mostly complete record of every class I have taken from high school to now.</h2>
                    <div className='horizontal-divider'></div>
                    <h3 className='education-header'>Undergraduate</h3>
                    <div id='undergrad-info' className='institution-info'>
                        <div className='institution-name'>{this.state.education.Undergraduate.Institution}</div>
                        <div className='institution-time-period'>{this.state.education.Undergraduate.Start}-{this.state.education.Undergraduate.End}</div>
                    </div>
                    <div className='horizontal-divider'></div>
                    <div id='undergrad-container'>
                        {this.state.education.Undergraduate.Classes.map((term) => {
                            return (
                                <div className='term-container' key={term.Term}>
                                    <div className='term-header'>{term.Term}</div>
                                    <div className='classes-container'>
                                        {term.Classes.map((currClass) => {
                                            if (currClass.Number) {
                                                return (<div className='class-container' key={currClass.Name}>
                                                    <div className='class-title'>{currClass.Number}: {currClass.Name}</div>
                                                    <div className='class-description'>{currClass.Description}</div>
                                                    </div>)
                                            } else {
                                                return (<div className='class-container' key={currClass.Name}>
                                                    <div className='class-title'>{currClass.Name}</div>
                                                    <div className='class-description'>{currClass.Description}</div>
                                                    </div>)
                                            }
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='horizontal-divider'></div>
                    <h3 className='education-header'>High School</h3>
                    <div id='undergrad-info' className='institution-info'>
                        <div className='institution-name'>{this.state.education["High School"].Institution}</div>
                        <div className='institution-time-period'>{this.state.education["High School"].Start}-{this.state.education["High School"].End}</div>
                    </div>
                    <div className='horizontal-divider'></div>
                    <div id='undergrad-container'>
                        {this.state.education["High School"].Classes.map((term) => {
                            return (
                                <div className='term-container' key={term.Term}>
                                    <div className='term-header'>{term.Term}</div>
                                    <div className='classes-container'>
                                        {term.Classes.map((currClass) => {
                                            if (currClass.Number) {
                                                return (<div className='class-container' key={currClass.Name}>
                                                    <div className='class-title'>{currClass.Number}: {currClass.Name}</div>
                                                    <div className='class-description'>{currClass.Description}</div>
                                                    </div>)
                                            } else {
                                                return (<div className='class-container' key={currClass.Name}>
                                                    <div className='class-title'>{currClass.Name}</div>
                                                    <div className='class-description'>{currClass.Description}</div>
                                                    </div>)
                                            }
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <FooterBar />
                </div>
            )
        }
    }
}

export default Education;