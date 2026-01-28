import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import AboutMe from './pages/AboutMe'
import Pictures from './pages/Pictures'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="name">Jonathon</h1>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/pictures" className="nav-link">Pictures</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/pictures" element={<Pictures />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
