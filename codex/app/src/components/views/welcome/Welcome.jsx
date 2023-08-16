import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../../assets/images/Codex.png'
import './welcome.css'

const Welcome = () => {

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setCurrentWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])

    return(
        <>
        <section className="welcome" id="welcome">
            <div className="welcome-text">
                <h1>Cantusgenerator</h1>
                <p>
                    Welkom bij de online cantusgenerator.
                    <br/>
                    <br/>
                    Met behulp van AI kan jij nu zelf je eigen cantusliedjes aanmaken. Je hoeft enkel naar de generator te navigeren, de instructie te lezen en wij doen de rest.
                </p>
            </div>
            <div className="welcome-hero">
            <picture>
                <div className="hero-image">
                        <img src={Hero} />
                </div>
            </picture>
            </div>
        </section>
        <div className='nav-button'>
                <Link to={'/generator'}>
                    <button className='button-1'>Genereer je liedje</button>
                </Link>
            </div>
        </>
    )
}

export default Welcome;