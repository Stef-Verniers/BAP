import { useState } from 'react';
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
        <li><HashLink to='#welcome' smooth>Home</HashLink></li>
            <li><HashLink to='#liederen' smooth>Liederen</HashLink></li>
                <ul className="subnav">
                    <li><HashLink to='#zoeken'  smooth>Zoeken</HashLink></li>
                    <li><HashLink to='#plechtige-liederen'  smooth>Plechtige liederen</HashLink></li>
                    <li><HashLink to='#vaderland'  smooth>Vaderland</HashLink></li>
                    <li><HashLink to='#de-gilde-viert'  smooth>De Gilde Viert</HashLink></li>
                    <li><HashLink to='#drinkliederen'  smooth>Drinkliederen</HashLink></li>
                    <li><HashLink to='#traditioneel'  smooth>Traditioneel</HashLink></li>
                    <li><HashLink to='#die-stem-van-suid-afrika'  smooth>Die stem van Suid-Afrika</HashLink></li>
                    <li><HashLink to='#die-burschenschaft'  smooth>Die Burschenschaft</HashLink></li>
                    <li><HashLink to='#over-the-sea'  smooth>Over the Sea</HashLink></li>
                    <li><HashLink to='#traditioneel'  smooth>Traditioneel</HashLink></li>
                    <li><HashLink to='#au-quartier-latin'  smooth>Au Quartier Latin</HashLink></li>
                    <li><HashLink to='#de-wereld-rond'  smooth>De wereld rond</HashLink></li>
                    <li><HashLink to='#regionale-liederschat'  smooth>Regionale Liederschat</HashLink></li>
                </ul>
            <li><HashLink to='#generator'  smooth>Generator</HashLink></li>
        </ul>
        <div className="trigger" id="trigger" onClick={toggleNav}>
            <div className={ isActive ? "circle filled" : "circle"} id="circle"></div>
        </div>
        </>
    )
}

export default Sidebar;