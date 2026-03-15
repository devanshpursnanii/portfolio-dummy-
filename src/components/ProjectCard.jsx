function ProjectCard({ project }) {
  return (
    <article className="project-card glass pulse-card">
      <div className="project-index">{project.number}</div>
      <div className="project-type">{project.type}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="mono-tag">
            {tag}
          </span>
        ))}
      </div>
      <a className="project-link interactive" href={project.href} target="_blank" rel="noreferrer">
        View Project ↗
      </a>
    </article>
  );
}

export default ProjectCard;
