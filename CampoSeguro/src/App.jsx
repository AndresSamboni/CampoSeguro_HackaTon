import './App.css'
import { About } from './components/about/About'
import { Landing } from './components/landing/Landing'
import { Layout } from './components/layout/Layout'
import NavBar from './components/navBar/NavBar'
import ReportPage from './components/reportPage/ReportPage'

function App() {
  return (
    <>
      <NavBar />
      <Landing/>
      <Layout/>
      <About/>
      <ReportPage/>
    </>
  )
}

export default App
