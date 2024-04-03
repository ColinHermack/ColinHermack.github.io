import React from 'react';
import '../styles/resume.css';
import { NavigationBar, FooterBar } from '../widgets.js';

class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const resumeData = require('../data/resume.json');
        this.setState({resume: resumeData});
    }

    render() {
        if (this.state.resume) {
            return (
                <div id='resume-container'>
                    <NavigationBar />
                    <h1>Education</h1>
                    <div className='horizontal-divider'></div>
                    {this.state.resume.Education.map((item) => {
                        return (
                            <div className='education-experience-item-container'>
                                <div className='education-experience-header'>
                                    <div className='institution-position'>{item.School}</div>
                                    <div className='time-period'>{`${item.Start} - ${item.End}`}</div>
                                </div>
                                <ul>
                                    {item.Notes.map((currNote) => {
                                        return(<li key={currNote}>{currNote}</li>)
                                    })}
                                    <li key='gpa'>{`GPA: ${item.GPA}`}</li>
                                </ul>
                            </div>
                        )
                    })}
                    <h1>Experience</h1>
                    <div className='horizontal-divider'></div>
                    {this.state.resume.Experience.map((item) => {
                        return (
                            <div className='education-experience-item-container'>
                                <div className='education-experience-header'>
                                    <div className='institution-position'>{`${item.Position}, ${item.Organization}`}</div>
                                    <div className='time-period'>{`${item.Start} - ${item.End}`}</div>
                                </div>
                                <ul>
                                    {item.Notes.map((currNote) => {
                                        return(<li key={currNote}>{currNote}</li>)
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    <h1>Leadership</h1>
                    <div className='horizontal-divider'></div>
                    {this.state.resume.Leadership.map((item) => {
                        return (
                            <div className='education-experience-item-container'>
                                <div className='education-experience-header'>
                                    <div className='institution-position'>{item.Position}</div>
                                    <div className='time-period'>{`${item.Start} - ${item.End}`}</div>
                                </div>
                                <ul>
                                    {item.Notes.map((currNote) => {
                                        return(<li key={currNote}>{currNote}</li>)
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    <h1>Honors and Awards</h1>
                    <div className='horizontal-divider'></div>
                    {this.state.resume.Awards.map((item) => {
                        return (
                            <div className='education-experience-item-container'>
                                <div className='education-experience-header'>
                                    <div className='institution-position'>{item.Award}</div>
                                    <div className='time-period'>{item.Date}</div>
                                </div>
                                <ul>
                                    {item.Notes.map((currNote) => {
                                        return(<li key={currNote}>{currNote}</li>)
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    <h1>Certifications</h1>
                    <div className='horizontal-divider'></div>
                    <ul className='certifications-skills-list'>
                        {this.state.resume.Certifications.map((item) => {
                            return (<li key={item}>{item}</li>)
                        })}
                    </ul>
                    <h1>Experience In</h1>
                    <div className='horizontal-divider'></div>
                    <ul className='certifications-skills-list'>
                        {this.state.resume.Skills.map((item) => {
                            return (<li key={item}>{item}</li>)
                        })}
                    </ul>
                    <FooterBar />
                </div>
            )
        } else {
            return(<div id='resume-container'></div>)
        }
    }
}

export default Resume;