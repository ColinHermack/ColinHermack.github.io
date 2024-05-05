import React from 'react';
import '../styles/projects.css';
import { NavigationBar, FooterBar } from '../widgets.js';
import { FaGithub, FaServer } from 'react-icons/fa';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const projectData = require('../data/projects.json');
        this.setState({projects: projectData});
    }

    render() {
        const getGithub = (item) => {
            if (item.GitHub) {
                return (<a href={item.GitHub} className='project-github' target='_blank' rel='noreferrer'><FaGithub /></a>)
            }
            return null;
        }
        
        const getDeployment = (item) => {
            if (item.Live) {
                return (<a href={item.Live} className='project-deployment' target='_blank' rel='noreferrer'><FaServer /></a>)
            }
            return null;
        }

        if (this.state.projects) {
            return(
                <div id='projects-container'>
                    <NavigationBar />
                    <h1>Projects</h1>
                    {this.state.projects.map((item) => {
                        if (item.Pinned) {
                            return (
                                <a href={`#/project/${item.Name.toLowerCase().replaceAll(" ", "-")}`}>
                                    <div className='project-container'>
                                        <div className='project-title'>{item.Name}</div>
                                        <div className='project-description'>{item['Short Description']}</div>
                                        <div className='project-technologies'>{item.Technologies.map((currTech) => {
                                            return (<div>{currTech}</div>)
                                        })}</div>
                                        {getGithub(item)}
                                        {getDeployment(item)}
                                    </div>
                                </a>
                            )
                        }
                        return null;
                    })}
                    <div className='horizontal-divider'></div>
                    {this.state.projects.map((item) => {
                        if (!item.Pinned) {
                            return (
                                <a href={`#/project/${item.Name.toLowerCase().replaceAll(" ", "-")}`}>
                                    <div className='project-container'>
                                        <div className='project-title'>{item.Name}</div>
                                        <div className='project-description'>{item['Short Description']}</div>
                                        <div className='project-technologies'>{item.Technologies.map((currTech) => {
                                            return (<div>{currTech}</div>)
                                        })}</div>
                                        {getGithub(item)}
                                        {getDeployment(item)}
                                    </div>
                                </a>
                            )
                        }
                        return null;
                    })}
                    <FooterBar />
                </div>
            )
        }
        return (
            <div id='projects-container'>
                <NavigationBar />
                <div className='filler'></div>
                <FooterBar />
            </div>
        )
    }
}

export default Projects;