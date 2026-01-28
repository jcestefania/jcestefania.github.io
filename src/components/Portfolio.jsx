import React from "react";
import "./styles/Portfolio.css";

const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const ExternalLinkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);
const CodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const projects = [
  {
    title: "Pressure Sensor Seat - IoT Monitor",
    description:
      "Sistema de monitorización inteligente con IoT. Trabajo de Fin de Grado (Matrícula de Honor 9.6/10). Hardware y software para análisis postural en tiempo real.",
    tags: [
      { name: "IoT", color: "green" },
      { name: "C/C++", color: "blue" },
      { name: "Arduino", color: "white" },
    ],
    // Correct filename: tfg.png, using PUBLIC_URL
    image: process.env.PUBLIC_URL + "/projects_images/tfg.png",
    repo: "https://github.com/jcestefania/pressure-sensor-seat",
  },
  {
    title: "NLP Chef Chatbot",
    description:
      "Asistente culinario inteligente basado en Procesamiento de Lenguaje Natural. Recomienda recetas y resuelve dudas gastronómicas usando modelos de IA.",
    tags: [
      { name: "Python", color: "yellow" },
      { name: "NLP", color: "purple" },
      { name: "Machine Learning", color: "blue" },
    ],
    // Correct filename: chatbot.png, using PUBLIC_URL
    image: process.env.PUBLIC_URL + "/projects_images/chatbot.png",
    repo: "https://github.com/jcestefania/NLP_ChatBot",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>
        <CodeIcon />
        Proyectos
      </h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-image">
              {/* Fallback to placeholder if image fails to load (optional, handled by browser's broken icon usually) */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/600x338/1e293b/ffffff?text=Image+Not+Found";
                }}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">
                    {tag.name}
                  </span>
                ))}
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-links">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project"
                >
                  <GithubIcon />
                  Code
                </a>
                {/* Preview button removed as requested */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
