import { useState } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css'
import { useLocation } from 'react-router-dom';

const Sidebar = () => {

    // Sidebar for navigation

    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const toggleNav = (event) => {
        event.preventDefault()
        setIsActive((current) => !current)
    }

    return(
        <>
            <ul className={isActive ? 'nav open' : 'nav'}>
                <li><Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to='/generator' className={location.pathname === '/generator' ? 'active' : ''}>Generator</Link></li>
            </ul>
        </>
    )
}

export default Sidebar;