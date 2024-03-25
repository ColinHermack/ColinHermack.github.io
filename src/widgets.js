import './styles/widgets.css';
import { FaX, FaBars } from 'react-icons/fa';

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
