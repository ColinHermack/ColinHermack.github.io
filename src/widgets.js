import './styles/widgets.css';
import { FaBars, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const NavigationBar = () => {

    let rootDir = '.';
    if (window.location.href.includes('project') && !(window.location.href.includes('projects'))) {
        rootDir = '..';
    }
    return (
        <nav>
            <a href={`${rootDir}/`} id='nav-home'>Colin Hermack</a>
            <div id='nav-options-container'>
                <button id='mobile-nav-close' onClick={() => {
                    document.getElementById('nav-options-container').style.display = 'none';
                }}>X</button>
                <a href={`${rootDir}/resume`} className='nav-item'>Resume</a>
                <a href={`${rootDir}/projects`} className='nav-item'>Projects</a>
                <a href={`${rootDir}/education`} className='nav-item'>Education</a>
                <a href={`${rootDir}/endeavors`} className='nav-item'>Endeavors</a>
            </div>
            <button id='mobile-nav-open' onClick={() => {
                document.getElementById('nav-options-container').style.display = 'flex';
            }}><FaBars /></button>
        </nav>
    );
}

export const FooterBar = () => {
    const getCopyrightMessage = () => {
        let date = new Date();
        if (date.getFullYear() === 2024) {
            return ("© Colin Hermack 2024");
        } else {
            return (`© Colin Hermack 2024-${date.getFullyYear()}`)
        }
    }

    return (
        <footer>
            <div id='contact-options-container'>
                <a href='mailto:colinhermack@gmail.com' target='_blank' rel='noreferrer'><FaEnvelope /></a>
                <a href='https://github.com/ColinHermack' target='_blank' rel='noreferrer'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/colinhermack/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
            </div>
            <div id='copyright-message'>{getCopyrightMessage()}</div>
        </footer>
    );
}
