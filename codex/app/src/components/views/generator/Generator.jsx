import './generator.css'
import arrow from '../../../assets/images/arrow.svg'
import { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Generator = () => {

    const [value, setValue] = useState("")
    const [isGenerated, setIsGenerated] = useState(false)
    const [message, setMessage] = useState("")
    const [request, setRequest] = useState('')
    const [answer, setAnswer] = useState('')
    const [taal, setTaal] = useState('Vlaams')
    const [previewTaal, setPreviewTaal] = useState('')
    const talen = [
        'Vlaams',
        'Frans',
        'Engels',
        'Duits',
        'Zuid-Afrikaans',
        'Spaans',
        'Italiaans',
        'Latijns'
    ]

    const [toggled, setToggled] = useState(false)

    // Request voor de API
    const getMessages = async (e) => {
        e.preventDefault()
        setRequest(value, taal)
        if (message) {
            setMessage("")
            setPreviewTaal(taal)
        }
        const options = {
            method: "POST",
            body: JSON.stringify(
                {
                    message: `Kan je mij een ${taal} cantusnummer genereren over ${value}
                    met rijmschema AABB
                    met respect voor de context
                    zonder bevestiging of opmerkingen
                    zonder het vermelden van het begrip cantus of rijmschema AABB
                    `
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const response =  await fetch(`${import.meta.env.VITE_API_URL}/completions`, options)
            const data = await response.json()
            setMessage(data.choices[0].message)
            setAnswer(data.choices[0].message.content)
            setIsGenerated(true)
            setValue('')
        } catch (error) {
            console.error(error)
        }
    }

    // functie om tabs toe te voegen zodat het niet 1 lange tekst wordt.
    function convertText(input) {
        const sections = input.split(/\(([^)]+)\)/).filter(Boolean);
        return (
          <div style={{ whiteSpace: 'pre-line' }}>
            {sections}
          </div>
        );
    }

    function toggleList() {
        setToggled(!toggled)
    }


    function waitingForAnswer() {
        if (message) {
            return <div className="answer">{convertText(answer)}</div>
        }        
        return <div className='loader'>
                    <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#4fa94d" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    />
                </div>
    }
    

    return (
        <>
            <div className='generator' id='generator'>
                <div className="generator-content">
                    <section className='generator-info'>
                        <h1>Generator</h1>
                        <p>Heb je altijd al eens een idee gehad voor een eigen cantusnummer te schrijven terwijl je niks weet van songwriting?
                        <br/>
                            Dan kan deze generator daar jou zeker bij helpen!
                        <br/>
                        <br/>
                            Geef een keyword of schrijf een situatie, kies in welke taal je het liedje wil en de generator doet de rest.
                        </p>
                    </section>
                    <section className='generator-section'>
                        <form className='generator-form'>
                            <input type='text' placeholder='Een vos die in de overpoort loopt'  value={value} onChange={(e) => setValue(e.target.value) }/>
                            <span>in het</span>
                            <select value={taal} onChange={(e) => setTaal(e.target.value)}>
                                {talen.map((item, key) => (
                                    <option key={key} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            <button type='submit' id='submit' onClick={getMessages} className='button-1'>Genereren</button>
                        </form>
                    </section>
                    <section className='generator-list'>
                        <div className='list-meta'>
                            <h2 onClick={toggleList}>Recente zoekopdrachten</h2>
                            <img className={`${toggled ? 'shown' : 'closed'}`} src={arrow} onClick={toggleList} />
                        </div>
                        <ul className={`list-container ${toggled ? '' : 'hidden'} `}>
                            <li>test</li>
                        </ul>
                    </section>
                    <section className='generator-answer' id='answer' style={{ display: request ? 'block' : 'none' }}>
                        <div className="request">
                            <strong><p>{`${request} (${previewTaal})`}</p></strong>
                        </div>
                        { waitingForAnswer() }
                    </section>
                </div>
            </div>
        </>
    )
}

export default Generator;