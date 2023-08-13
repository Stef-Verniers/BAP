import { Route, Routes } from 'react-router-dom'
// import { HashLink as Link } from 'react-router-hash-link'
import Welcome from './components/views/welcome/Welcome'
import Sidebar from './components/sidebar/Sidebar'
import Generator from './components/views/generator/Generator'


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
    </>
  )
}

export default App
