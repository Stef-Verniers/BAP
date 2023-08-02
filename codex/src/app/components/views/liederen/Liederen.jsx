import './liederen.css'


const Liederen = () => {
    return (
        <>
        <div className="liederen">
            <div className="liederen-content">
                <h1>Liederen</h1>
                <section className='liederen-section'>
                    <h2 className='section-title'>Zoeken</h2>
                    <div className="liederen-zoeken">
                        <input type='text' placeholder='bvb. Jan Klaassen de Trompetter' />
                    </div>
                </section>
                <section className='liederen-section'>
                    <h2 className='section-title'>Plechtige liederen</h2>
                    <div className="liederen-grid">
                        <div className="lied">
                            <h3>Io Vivat</h3>
                            <p>Pagina 37</p>
                        </div>
                        <div className="lied">
                            <h3>Gaudeaumus Igitur</h3>
                            <p>Pagina 38</p>
                        </div>
                    </div>
                </section>
                <section className='liederen-section'>
                    <h2 className='section-title'>Vaderland</h2>
                    <div className="liederen-grid">
                        <div className="lied">
                            <h3>De Vlaamse Leeuw</h3>
                            <p>Pagina 50</p>
                        </div>
                        <div className="lied">
                            <h3>Wilhelmus Van Nassauwe</h3>
                            <p>Pagina 52</p>
                        </div>
                        <div className="lied">
                            <h3>Die stem van Suid-Afrika</h3>
                            <p>Pagina 54</p>
                        </div>
                        <div className="lied">
                            <h3>Vlaenderen boven al</h3>
                            <p>Pagina 56</p>
                        </div>
                        <div className="lied">
                            <h3>Het lied der Vlamingen</h3>
                            <p>Pagina 57</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default Liederen;