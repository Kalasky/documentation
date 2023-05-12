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
import Features from './pages/Features'
import ContentPage from './pages/ContentPage'
import ContentPreview from './pages/ContentPreview'
import NotFound from './pages/404'
import Docs from './pages/Docs'
import Releases from './pages/Releases'
import ReleasesPage from './pages/ReleasesPage'

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
        <Route path="/features" element={<Features />} />
        <Route path="/blog/:id" element={<ContentPage />} />
        <Route path="/blog" element={<ContentPreview />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/releases" element={<Releases />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
