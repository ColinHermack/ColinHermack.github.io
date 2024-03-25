import React from 'react';
import '../styles/home.css';
import { NavigationBar } from '../widgets.js';
import Headshot from '../media/headshot.jpg';

class Home extends React.Component {

    render() {
        return (
            <div id='home-container'>
                <NavigationBar />
                <img src={Headshot} alt="Colin Hermack's headshot" id='headshot-main'/>
                <h1 id='name-main'>Colin Hermack</h1>
                <h2 id='title-main'>Computer Science and Mathematics Student at Purdue University</h2>
                <div className='horizontal-divider'></div>
                <div id='description-main'>I am a freshman pursuing a double major in computer science
                and mathematics at Purdue University. I am also experienced in full-stack web development
                with a concentration in front end development. This website includes my experience,
                projects, and other things I find interesting, want to share, or just think would be a cool
                feature to build into a website.</div>
                <div className='horizontal-divider'></div>
                <div id='quick-links'>
                    <a href='./resume'><div>My Resume</div></a>
                    <a href='./projects'><div>My Projects</div></a>
                </div>
            </div>
        )
    }
}

export default Home;
