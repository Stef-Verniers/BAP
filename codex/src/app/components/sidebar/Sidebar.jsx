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
            <li><HashLink to='#liederen' smooth className={location.hash === '#liederen' ? 'active' : ''}>Liederen</HashLink></li>
                <ul className="subnav">
                    <li><HashLink to='#zoeken' smooth className={location.hash === '#zoeken' ? 'active' : ''} >Zoeken</HashLink></li>
                    <li><HashLink to='#plechtige-liederen' smooth className={location.hash === '#plechtige-liederen' ? 'active' : ''}>Plechtige liederen</HashLink></li>
                    <li><HashLink to='#vaderland' smooth className={location.hash === '#vaderland' ? 'active' : ''}>Vaderland</HashLink></li>
                    <li><HashLink to='#de-gilde-viert' smooth className={location.hash === '#de-gilde-viert' ? 'active' : ''}>De Gilde Viert</HashLink></li>
                    <li><HashLink to='#drinkliederen' smooth className={location.hash === '#drinkliederen' ? 'active' : ''}>Drinkliederen</HashLink></li>
                    <li><HashLink to='#traditioneel' smooth className={location.hash === '#traditioneel' ? 'active' : ''}>Traditioneel</HashLink></li>
                    <li>
                        <HashLink to='#die-stem-van-suid-afrika' smooth className={location.hash === '#die-stem-van-suid-afrika' ? 'active' : ''}>
                            Die stem van Suid-Afrika
                        </HashLink>
                    </li>
                    <li><HashLink to='#die-burschenschaft' smooth className={location.hash === '#die-burschenschaft' ? 'active' : ''}>Die Burschenschaft</HashLink></li>
                    <li><HashLink to='#over-the-sea' smooth className={location.hash === '#over-the-sea' ? 'active' : ''}>Over the Sea</HashLink></li>
                    <li><HashLink to='#au-quartier-latin' smooth className={location.hash === '#au-quartier-latin' ? 'active' : ''}>Au Quartier Latin</HashLink></li>
                    <li><HashLink to='#de-wereld-rond' smooth className={location.hash === '#de-wereld-rond' ? 'active' : ''}>De wereld rond</HashLink></li>
                    <li><HashLink to='#regionale-liederschat' smooth className={location.hash === '#regionale-liederschat' ? 'active' : ''}>Regionale Liederschat</HashLink></li>
                </ul>
            <li><HashLink to='#generator' smooth className={location.hash === '#generator' ? 'active' : ''}>Generator</HashLink></li>
        </ul>
        <div className="trigger" id="trigger" onClick={toggleNav}>
            <div className={ isActive ? "circle filled" : "circle"} id="circle"></div>
        </div>
        </>
    )
}

export default Sidebar;