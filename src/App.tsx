import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

type Page = 'home' | 'projects' | 'about' | 'contact'

const pages: Record<Page, React.ComponentType> = {
  home: Home,
  projects: Projects,
  about: About,
  contact: Contact,
}

function App() {
  const [page, setPage] = useState<Page>('home')
  const PageComponent = pages[page]

  return (
    <>
      <nav className="banner">
        <span className="banner-name" onClick={() => setPage('home')}>Jonathon Norrie</span>
        <div className="banner-links">
          <span onClick={() => setPage('projects')}>Projects</span>
          <span onClick={() => setPage('about')}>About</span>
          <span onClick={() => setPage('contact')}>Contact</span>
        </div>
      </nav>
      <main className="hero-name">
        <PageComponent />
      </main>
    </>
  )
}

export default App
