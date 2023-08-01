import Welcome from './app/components/views/welcome/Welcome'
import Liederen from './app/components/views/liederen/Liederen'
import Sidebar from './app/components/sidebar/Sidebar'

function App() {

  return (
  <body>
    <Sidebar />
    <main> 
      <Welcome />
      <Liederen />
    </main>
  </body>
  )
}

export default App
