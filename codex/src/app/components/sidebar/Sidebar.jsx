import { useState } from 'react';
import './sidebar.css'

const Sidebar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleNav = (event) => {
        event.preventDefault()
        setIsActive((current) => !current)
    }

    return(
        <>
        <ul className={isActive ? 'nav open' : 'nav'}>
            <li><a>Hoofdpagina</a></li>
            <li><a className='active'>Liederen</a></li>
            <ul className="subnav">
                <li><a>Plechtige liederen</a></li>
                <li><a>Vaderland</a></li>
                <li><a>De Gilde Viert</a></li>
            </ul>
            <li><a>Generator</a></li>
        </ul>
        <div className="trigger" id="trigger" onClick={toggleNav}>
            <div className={ isActive ? "circle filled" : "circle"} id="circle"></div>
        </div>
        </>
    )
}

export default Sidebar;