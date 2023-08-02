import './generator.css'
import { useState } from 'react'

const Generator = () => {

    const [value, setValue] = useState(null)
    const [message, setMessage] = useState(null)
    const [request, setRequest] = useState('')
    const [answer, setAnswer] = useState('')

    // Request voor de API
    const getMessages = async () => {
        setRequest(value)
        const options = {
            method: "POST",
            body: JSON.stringify(
                {
                    message: `Kan je mij een Vlaams cantusnummer genereren over ${value} dat rijmt`
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
           const response =  await fetch('http://localhost:8000/completions', options)
           const data = await response.json()
           setMessage(data.choices[0].message)
           setAnswer(data.choices[0].message.content)
           setValue('')
        } catch (error) {
            console.error(error)
        }
    }

    // functie om tabs toe te voegen zodat het niet 1 lange tekst wordt.
    function convertText(input) {
        const sections = input.split(/\(([^)]+)\)/).filter(Boolean);

        return (
          <div>
            {sections.map((section, index) => {
              if (index % 2 === 1) {
                return <h2 key={index} className='liedtekst'>{section.trim()}</h2>;
              } else {
                const sectionContent = section.trim().split(/,\s*/).join(',\n');
                return <p key={index} className='aanduiding'>{sectionContent}</p>;
              }
            })}
          </div>
        );
      }
    

    return (
        <>
            <div className='generator' id='generator'>
                <div className="generator-content">
                    <h1>Generator</h1>
                    <p>Heb je altijd al eens een idee gehad voor een eigen cantusnummer te schrijven terwijl je niks weet van songwriting?
                    <br/>
                    Dan kan deze generator daar jou zeker bij helpen!
                    <br/>
                    <br/>
                    Geef een keyword of schrijf een situatie en de generator doet de rest.
                    </p>
                    <section className='generator-section'>
                        <form className='generator-form'>
                            <input type='text' placeholder='Een vos die in de overpoort loopt'  value={value} onChange={(e) => setValue(e.target.value) }/>
                            <button type='submit' id='submit' onClick={getMessages} className='button-1'>Genereren</button>
                        </form>
                    </section>
                    <section className='generator-answer' id='answer' style={{ display: request ? 'block' : 'none' }}>
                        <div className="request">
                            <strong><p>{request}</p></strong>
                        </div>
                        <div className="answer">
                            {convertText(answer)}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Generator;