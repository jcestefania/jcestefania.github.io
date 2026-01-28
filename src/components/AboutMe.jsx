import React from "react";
import profilePhoto from "../assets/img/image.png";
import "./styles/AboutMe.css";

const UserIcon = () => (
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
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

function AboutMe() {
  return (
    <section id="about-me" className="about-me-section">
      <h2 className="section-title">
        <UserIcon />
        Sobre mí
      </h2>

      <div className="about-me-content">
        <div className="about-me-text">
          <p>
            Soy{" "}
            <span className="highlight">
              Graduado en Ingeniería Informática
            </span>{" "}
            por CUNEF Universidad y actualmente estoy cursando un{" "}
            <span className="highlight">
              Máster en Inteligencia Artificial Aplicada
            </span>{" "}
            en la Universidad Carlos III de Madrid.
          </p>

          <p>
            En cada proyecto intento dar lo mejor de mí; un ejemplo de ello es
            mi Trabajo de Fin de Grado sobre monitorización inteligente con IoT,
            por el que recibí una{" "}
            <span className="highlight">Matrícula de Honor (9.6/10)</span>.
            Además, durante la carrera obtuve menciones académicas en las
            asignaturas de Inteligencia Artificial y Machine Learning.
          </p>

          <p>
            Me apasiona todo lo relacionado con la IA, el Machine Learning, la
            Ingeniería de Software y el Cloud Computing. Me motiva aplicar lo
            que sé para resolver problemas reales y siempre trato de estar al
            día con las nuevas tecnologías y tendencias del sector.
          </p>
        </div>

        <div className="about-me-image">
          <img src={profilePhoto} alt="Juan Carlos" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
