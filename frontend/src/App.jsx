import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
