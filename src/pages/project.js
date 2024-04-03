import React from 'react';
import '../styles/project.css';
import { NavigationBar, FooterBar } from '../widgets.js';
import { FaGithub, FaServer } from 'react-icons/fa';
const weatherImg = require('../media/projects/weather-home.png');

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const projectName = window.location.pathname.split("/").slice(-1)[0];

        const projectData = require('../data/projects.json');
        for (let i = 0; i < projectData.length; i++) {
            if (projectData[i].Name.toLowerCase().replaceAll(" ", "-") === projectName) {
                console.log(projectData[i]);
                this.setState({project: projectData[i]});
                break;
            }
        }

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

        console.log(this.state.project);
        if (this.state.project) {
            return (
            <div id='project-container'>
                <NavigationBar />
                <h1 id='project-title'>{this.state.project.Name}</h1>
                <div id='quick-project-links'>
                    {getGithub(this.state.project)}
                    {getDeployment(this.state.project)}
                </div>
                <h2 id='short-description'>{this.state.project['Short Description']}</h2>
                <div className='horizontal-divider'></div>
                <div id='long-description'>{this.state.project['Long Description']}</div>
                <div className='horizontal-divider'></div>
                <div id='project-images-container'>  
                    {this.state.project.Images.map((path) => {
                    })}
                </div>
                <FooterBar />
            </div>)
        }
        return (
            <div id='project-container'>
                <NavigationBar />
                <FooterBar />
            </div>
        )
        
    }
}

export default Project;