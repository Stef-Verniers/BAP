import './generator.css'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Generator = () => {

    const [value, setValue] = useState("")
    const [message, setMessage] = useState("")
    const [request, setRequest] = useState('')
    const [answer, setAnswer] = useState('')

    // Request voor de API
    const getMessages = async () => {
        if (message) {
            setMessage("")
        }
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
            const response =  await fetch(`${import.meta.env.VITE_API_URL}/completions`, options)
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
                        { waitingForAnswer() }
                    </section>
                </div>
            </div>
        </>
    )
}

export default Generator;