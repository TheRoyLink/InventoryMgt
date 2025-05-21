import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="App">
      <nav className="navbar">
        {/* Botón de hamburguesa al lado izquierdo del logo */}
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className="logo">Mi App</div>

        {/* Menú de navegación */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* Botón de cierre en móvil (el mismo ícono) */}
          <li className="close-toggle">
            <button onClick={closeMenu}>&#9776;</button>
          </li>
          <li><a href="#" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#" onClick={closeMenu}>Acerca</a></li>
          <li><a href="#" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </nav>

      <main>
        <h1>Bienvenido a mi app</h1>
        <p>Contenido principal aquí.</p>
      </main>
    </div>
  );
}

export default App;