import { useEffect, useState } from 'react'
import Hero from '../../../../assets/images/Codex.png'
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
                <h1>Studentencodex Online</h1>
                <p>
                    Welkom bij studentencodex online.
                    <br/>
                    <br/>
                    Blader door onze uitgebreide collectie cantusliedjes en zing de longen uit je lijf op je favoriete cantusnummers.
                    Door middel van de meegeleverde audioclip kan je luisteren naar liedjes om ze te oefenen zodat jij jouw codexkennis kan verhogen.
                    <br/>
                    <br/>
                    Als je op zoek bent naar een persoonlijke touch, geef dan een input aan onze slimme AI en laat hem een gloednieuw cantusnummer voor je genereren. Voer een paar woorden in die je wilt dat in het nummer worden opgenomen, en onze AI zal een meeslepend lied creëren dat perfect past bij de sfeer van een cantus.
                </p>
            </div>
            <div className="welcome-hero" style={{ display: currentWidth < 1201 ? 'none' : 'flex' }}>
                <div className="hero-image">
                    <img src={Hero} />
                </div>
            </div>
        </section>
        </>
    )
}

export default Welcome;