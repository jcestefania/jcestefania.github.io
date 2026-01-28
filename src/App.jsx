import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preference on initial load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container">
        <Hero />
        <AboutMe />
        <Portfolio />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

export default App;
