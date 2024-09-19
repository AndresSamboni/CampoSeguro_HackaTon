import './App.css'
import { About } from './components/about/About'
import { Landing } from './components/landing/Landing'
import NavBar from './components/navBar/NavBar'
import ReportPage from './components/reportPage/ReportPage'

function App() {
  return (
    <>
      <NavBar />
      <ReportPage/>
      <Landing/>
      <About/>
    </>
  )
}

export default App
