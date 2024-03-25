import './styles/widgets.css';
import { FaBars, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const NavigationBar = () => {
    return (
        <nav>
            <a href='./' id='nav-home'>Colin Hermack</a>
            <div id='nav-options-container'>
                <button id='mobile-nav-close' onClick={() => {
                    document.getElementById('nav-options-container').style.display = 'none';
                }}>X</button>
                <a href='./resume' className='nav-item'>Resume</a>
                <a href='./projects' className='nav-item'>Projects</a>
                <a href='./endeavors' className='nav-item'>Endeavors</a>
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
                <a href='mailto:colinhermack@gmail.com'><FaEnvelope /></a>
                <a href='https://github.com/ColinHermack'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/colinhermack/'><FaLinkedin /></a>
            </div>
            <div id='copyright-message'>{getCopyrightMessage()}</div>
        </footer>
    );
}
