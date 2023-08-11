// import { Route, Routes } from 'react-router-dom'
// import { HashLink as Link } from 'react-router-hash-link'
import Welcome from './app/components/views/welcome/Welcome'
import Sidebar from './app/components/sidebar/Sidebar'
import Generator from './app/components/views/generator/Generator'


function App() {

  return (
    <>
    <Sidebar />
      <main>
        <Welcome />
        <Generator />
        {/* <Routes>
        </Routes> */}
      </main>
    </>
  )
}

export default App
