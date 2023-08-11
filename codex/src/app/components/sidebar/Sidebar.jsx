import { useState } from 'react';
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
            <li><HashLink to='#welcome' smooth className={location.hash === '#welcome' ? 'active' : ''}>Home</HashLink></li>
            <li><HashLink to='#generator' smooth className={location.hash === '#generator' ? 'active' : ''}>Generator</HashLink></li>
        </ul>
        <div className="trigger" id="trigger" onClick={toggleNav}>
            <div className={ isActive ? "circle filled" : "circle"} id="circle"></div>
        </div>
        </>
    )
}

export default Sidebar;