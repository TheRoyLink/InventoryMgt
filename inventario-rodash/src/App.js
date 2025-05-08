import './App.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">
        <div className="app-name">Gestión de Inventario</div>
        <p>Bienvenido a la aplicación de inventario de tu negocio.</p>
        <div className="settings">
          <button onClick={toggleTheme}>
            Cambiar a {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </div>
      </header>
      <div className="App-content">
        <h2>Lista de Productos</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí se mostrarán los productos */}
          </tbody>
        </table>
        <button onClick={() => alert('Agregar producto')}>Agregar Producto</button>
      </div>
        <div className="footer">
          <p>© 2023 Inventario Rodash. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default App;
