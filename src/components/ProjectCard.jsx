function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="card-footer">
        <span className="tech-stack">{project.tech}</span>
        <a
          className="text-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
