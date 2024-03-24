import './styles/widgets.css';
import { faX, farBars } from 'react-icons/fa';

export const NavigationBar = () => {
    return (
        <nav>
            <a href='./' id='nav-home'>Colin Hermack</a>
            <a href='./resume' className='nav-item'>Resume</a>
            <a href='./projects' className='nav-item'>Projects</a>
            <a href='./endeavors' className='nav-item'>Endeavors</a>
        </nav>
    );
}
