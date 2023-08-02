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
                <li><a>Zoeken</a></li>
                <li><a>Plechtige liederen</a></li>
                <li><a>Vaderland</a></li>
                <li><a>De Gilde Viert</a></li>
                <li><a>Drinkliederen</a></li>
                <li><a>Traditioneel</a></li>
                <li><a>Die stem van Suid-Afrika</a></li>
                <li><a>Die Burschenschaft</a></li>
                <li><a>Over the Sea</a></li>
                <li><a>Traditioneel</a></li>
                <li><a>Au Quartier Latin</a></li>
                <li><a>De wereld rond</a></li>
                <li><a>Regionale Liederschat</a></li>
                <li><a>Gallerij der Gentse Kringen en Clubs</a></li>
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