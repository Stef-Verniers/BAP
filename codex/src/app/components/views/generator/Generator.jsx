import './generator.css'

const Generator = () => {
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
                            <input type='text' placeholder='Een vos die in de overpoort loopt' />
                            <button type='submit' className='button-1'>Genereren</button>
                        </form>
                    </section>
                    <section className='generator-answer' id='answer'>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Generator;