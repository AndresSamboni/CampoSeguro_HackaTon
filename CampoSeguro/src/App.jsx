import './App.css'
import { About } from './components/about/About'
import { Landing } from './components/landing/Landing'
import NavBar from './components/navBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Landing/>
      <About/>
    </>
  )
}

export default App
