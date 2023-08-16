import { Route, Routes } from 'react-router-dom'
import './assets/styles/reset.css'
import Welcome from './components/views/welcome/Welcome'
import Sidebar from './components/sidebar/Sidebar'
import Generator from './components/views/generator/Generator'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
    <Sidebar />
      <main>
        <Routes>
          <Route path={'/'} element={<Welcome />} />
          <Route path={'/generator'} element={<Generator />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
