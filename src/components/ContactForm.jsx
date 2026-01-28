import React, { useRef } from "react";
import "./styles/ContactForm.css";

function ContactForm() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_y21rwxb";
    const templateID = "template_5ftku8q";

    window.emailjs.sendForm(serviceID, templateID, form.current).then(
      (response) => {
        alert("Mensaje enviado correctamente. ¡Gracias por contactarme!");
        console.log("SUCCESS!", response.status, response.text);
        form.current.reset(); // Limpia el formulario
      },
      (error) => {
        alert("Error al enviar el mensaje. Intenta nuevamente.");
        console.error("FAILED...", error);
      },
    );
  };

  const MailIcon = () => (
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  return (
    <section id="contacta-conmigo" className="contact-section">
      <h2>
        <MailIcon />
        Contacta conmigo
      </h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="reply_to"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
