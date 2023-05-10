import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Community from './pages/Community'
import Install from './pages/Install'
import Why from './pages/Why'
import Roadmap from './pages/Roadmap'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/install" element={<Install />} />
        <Route path="/why" element={<Why />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
