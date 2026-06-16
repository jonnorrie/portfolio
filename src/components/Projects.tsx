const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
]

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.id} className="project-box"></div>
        ))}
      </div>
    </div>
  )
}

export default Projects
