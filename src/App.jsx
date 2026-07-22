import ProjectCard from "./components/ProjectCard";
import CertificateCard from "./components/CertificateCard";

const projects = [
  {
    title: "Campus Connect",
    description:
      "A lightweight web app for students to discover campus events and collaborate on projects.",
    tech: "React, Vite, CSS",
    link: "#",
  },
  {
    title: "Study Tracker",
    description:
      "A simple habit tracker built to help manage coursework and study sessions.",
    tech: "React, Firebase, Tailwind CSS",
    link: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "A clean portfolio dashboard that showcases academic work and coding samples.",
    tech: "React, Node.js, Express",
    link: "#",
  },
];

const certificates = [
  {
    title: "Front-End Web Development",
    issuer: "Online Bootcamp",
    date: "2025",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Certification Body",
    date: "2024",
  },
  {
    title: "Responsive Design",
    issuer: "Professional Course",
    date: "2024",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">Ng Zheng Kai</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="section home-section">
          <div>
            <p className="eyebrow">
              Student developer • aspiring software engineer
            </p>
            <h1>Building clean web experiences with thoughtful design.</h1>
            <p className="intro-text">
              I’m a student developer focused on building polished interfaces
              and efficient apps that are easy to use, accessible, and ready for
              team collaboration.
            </p>
            <a className="primary-button" href="#portfolio">
              View projects
            </a>
          </div>
        </section>

        <section id="portfolio" className="section portfolio-section">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Selected projects</h2>
          </div>
          <div className="card-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="certificates" className="section certificates-section">
          <div className="section-heading">
            <p className="eyebrow">Certificates</p>
            <h2>Professional achievements</h2>
          </div>
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.title}
                certificate={certificate}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s connect</h2>
          </div>
          <p className="intro-text">
            I’m available for internships, part-time projects, and
            collaborations. Reach out with any opportunity or question.
          </p>
          <div className="contact-list">
            <a href="mailto:24039785@myrp.edu.sg">24039785@myrp.edu.sg</a>
            <a
              href="https://github.com/24039785"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zheng-kai-ng-72a00a377/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Designed for clarity, speed, and recruiter-friendly review.</p>
      </footer>
    </div>
  );
}

export default App;
