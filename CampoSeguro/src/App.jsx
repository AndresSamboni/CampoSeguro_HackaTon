// Import libraries
import About from './components/about/About'
import Call2Act from './components/call2Act/Call2Act'
import Landing from './components/landing/Landing'
import Layout from './components/layout/Layout'
import NavBar from './components/navBar/NavBar'
import ReportPage from './components/reportPage/ReportPage'

// Import styles
import './App.css'

// Main component
function App() {
  return (
    <>
      <NavBar />
      <Landing/>
      <Layout/>
      <Call2Act/>
      <About/>
      <ReportPage/>
    </>
  )
}

// Export component
export default App;