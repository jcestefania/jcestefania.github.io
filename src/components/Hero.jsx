import React from "react";
import profilePhoto from "../assets/img/image.png";
import "./styles/Hero.css";

const GithubIcon = () => (
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

const LinkedinIcon = () => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function Hero() {
  return (
    <section className="hero">
      <div className="hero-avatar-container">
        <div className="hero-avatar">
          <img src={profilePhoto} alt="Juan Carlos" />
        </div>
        <a
          href="https://www.linkedin.com/in/juan-carlos-estefan%C3%ADa-ovejero-b4b8862b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="status-badge"
        >
          Disponible para trabajar
        </a>
      </div>

      <h1>¡Hola! Soy Juan Carlos</h1>

      <p className="hero-intro">
        Graduado en <span className="highlight">Ingeniería Informática</span> y
        estudiante de Máster de{" "}
        <span className="highlight">Inteligencia Artificial Aplicada</span> en
        la Universidad Carlos III de Madrid.
      </p>

      <div className="hero-actions">
        <a
          href="https://github.com/jcestefania"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <GithubIcon />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/juan-carlos-estefan%C3%ADa-ovejero-b4b8862b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <LinkedinIcon />
          LinkedIn
        </a>
        <a
          href={process.env.PUBLIC_URL + "/cv/JuanCarlos_Estefania_CV.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          CV
        </a>
      </div>
    </section>
  );
}

export default Hero;
