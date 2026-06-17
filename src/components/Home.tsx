import { useState, useEffect } from 'react'

const titles = [
  'Full Stack Engineer',
  'Systems Designer',
  'Front End Developer',
  'Back End Developer',
  'Problem Solver',
  'Tech Tinkerer',
  'Nerd',
]

const Home = () => {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % titles.length)
        setVisible(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="hero-section">
        <h1>Hi, I'm Jonathon Norrie</h1>
        <h2 className={`rotating-title ${visible ? 'visible' : ''}`}>{titles[index]}</h2>
      </section>
      <section className="expertise-section">
        <h2 className="expertise-heading">Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-box"></div>
          <div className="expertise-box"></div>
          <div className="expertise-box"></div>
          <div className="expertise-box"></div>
        </div>
      </section>
      <section className="featured-section">
        <h2 className="featured-heading">Featured Project</h2>
        <div className="featured-box"></div>
      </section>
    </>
  )
}

export default Home
