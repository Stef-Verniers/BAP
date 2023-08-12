import { useState } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css'
import { useLocation } from 'react-router-dom';

const Sidebar = () => {

    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const toggleNav = (event) => {
        event.preventDefault()
        setIsActive((current) => !current)
    }

    return(
        <>
        <ul className={isActive ? 'nav open' : 'nav'}>
            <li><Link to='/' className={location.hash === '#welcome' ? 'active' : ''}>Home</Link></li>
            <li><Link to='/generator' className={location.hash === '#generator' ? 'active' : ''}>Generator</Link></li>
        </ul>
        <div className="trigger" id="trigger" onClick={toggleNav}>
            <div className={ isActive ? "circle filled" : "circle"} id="circle"></div>
        </div>
        </>
    )
}

export default Sidebar;