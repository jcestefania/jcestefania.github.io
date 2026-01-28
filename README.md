# Mi Marca Personal - Juan Carlos Estefanía

Este es mi portfolio personal desarrollado con **React**, rediseñado con un estilo minimalista y moderno inspirado en el diseño de producto de alta calidad. Muestra mi experiencia, proyectos destacados y curiosidades sobre mí.

## 🚀 Demo en vivo

Puedes ver el sitio en vivo en GitHub Pages:  
👉 **[https://jcestefania.github.io/mi-marca-personal-react/](https://jcestefania.github.io/mi-marca-personal-react/)**

---

## 📑 Características

- **Diseño Minimalista**: Tema oscuro con acentos de color, tipografía limpia y espaciado generoso.
- **Modo Oscuro/Claro**: Toggle integrado que guarda la preferencia del usuario.
- **Animaciones**: Efectos sutiles de hover y badges animados ("Disponible para trabajar").
- **Sección Hero**: Presentación directa con botones a GitHub, LinkedIn y descarga de CV.
- **Proyectos**: Tarjetas horizontales con imágenes, etiquetas de tecnologías (pills) y enlaces a código.
- **Responsive**: Totalmente adaptado a móviles y escritorio.

---

## 🛠️ Tecnologías

- **React**: Librería principal de UI (Hooks: `useState`, `useEffect`).
- **CSS3**: Variables CSS personalizadas, Flexbox y Grid sin frameworks pesados.
- **EmailJS**: Integración para el formulario de contacto sin backend.
- **GitHub Pages**: Despliegue automático.

---

## 📂 Estructura del proyecto

```plaintext
mi-marca-personal-react/
├── public/
│   ├── index.html
│   ├── cv/                 # Curriculums en PDF
│   │   └── JuanCarlos_Estefania_CV.pdf
│   └── projects_images/    # Imágenes de los proyectos (IoT, Chatbot...)
│
├── src/
│   ├── assets/             # Imágenes estáticas del sitio (Avatar)
│   ├── components/
│   │   ├── Header.jsx      # Navegación flotante ("Pill")
│   │   ├── Hero.jsx        # Intro + Botones + Foto
│   │   ├── AboutMe.jsx     # Biografía detallada
│   │   ├── Portfolio.jsx   # Grid de proyectos destacados
│   │   ├── ContactForm.jsx # Formulario con EmailJS
│   │   └── Footer.jsx
│   │
│   ├── styles/             # Módulos CSS por componente
│   ├── App.jsx             # Layout principal
│   ├── index.css           # Variables globales de tema
│   └── index.js
│
└── package.json
```

---

## ⚙️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jcestefania/mi-marca-personal-react.git
   cd mi-marca-personal-react
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta en local:
   ```bash
   npm start
   ```

---

## 📬 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Email:** juancarloseovejero@gmail.com
- **LinkedIn:** [Juan Carlos Estefanía Ovejero](https://www.linkedin.com/in/juan-carlos-estefan%C3%ADa-ovejero-b4b8862b3/)
- **GitHub:** [@jcestefania](https://github.com/jcestefania)
