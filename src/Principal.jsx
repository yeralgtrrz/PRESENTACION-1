import { default as React, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Indice from './componentes/Indice';
import Pagina1 from './componentes/Pagina1';
import Pagina2 from './componentes/Pagina2';
import Pagina3 from './componentes/Pagina3';
import Pagina4 from './componentes/Pagina4';
import Pagina5 from './componentes/Pagina5';
import Logo from './imagenes/logo.jpg';
import './Principal.css';

export default function Principal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Principal">
      <header>
        <img
          src={Logo}
          alt="Logotipo del Centro Cultural"
          className="logo"
        />
        <h1>CENTRO CULTURAL</h1>
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </div>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Índice
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagina1"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Página 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagina2"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Página 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagina3"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Página 3
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagina4"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Página 4
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagina5"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Página 5
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Indice />} />
          <Route path="/pagina1" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route path="/pagina4" element={<Pagina4 />} />
          <Route path="/pagina5" element={<Pagina5 />} />
        </Routes>
      </main>
      <footer className="footer">
  <div className="row">
    <div className="col footer-seccion1-1">
      <div className="row">
        <div className="col-auto">
          <img
            src={Logo}
            alt="LogoPie"
            className="footer-logo"
          />
        </div>
        <div className="col">
          <h5 className="footer-title">Centro Cultural</h5>
        </div>
      </div>
      <p className='texto-footer'>El arte no se detiene, que la luz de tu interior nunca se apage y la esperanza brilleee...</p>
    </div>
    <div className="col footer-seccion1-2">
      <h5>Enlace rápido</h5>
      <ul className="footer-enlace">
        <li>
          <NavLink to="/" className="footer-link">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/pagina1" className="footer-link">
            Actividades
          </NavLink>
        </li>
        <li>
          <NavLink to="/pagina2" className="footer-link">
            Noticias
          </NavLink>
        </li>
        <li>
          <NavLink to="/pagina3" className="footer-link">
            Contáctanos
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="col footer-seccion1-3">
      <h5>¡Estamos cerca!</h5>
      <p>
        <i className="bi bi-telephone-fill"></i>Llámanos:
      </p>
      <p>+591-98765401</p>
      <p>
        <i className="bi bi-geo-alt-fill"></i> Visitarnos:
      </p>
      <p> Calle Principal #123, El Alto, Bolivia</p>
      <p>
        <i className="bi bi-whatsapp"></i> WhatsApp
      </p>
      <p>+501-34674509</p>
    </div>
  </div>
  <div class="footer-seccion2-iconos">
    <div>
      <a href="https://www.youtube.com/">
        <i class="bi bi-youtube icon obalado"></i>
      </a>
      <p>YouTube</p>
    </div>
    <div>
      <a href="https://www.instagram.com/">
        <i class="bi bi-instagram icon"></i>
      </a>
      <p>Instagram</p>
    </div>
    <div>
      <a href="https://www.facebook.com/">
        <i class="bi bi-facebook icon"></i>
      </a>
      <p>Meta</p>
    </div>
  </div>
  <div className="row footer-ultimo">
      <p>&copy; {new Date().getFullYear()} Centro Cultural. Todos los derechos reservados.</p>
  </div>
</footer>
    </div>
  );
}
