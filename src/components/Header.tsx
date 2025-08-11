export default function Header() {
  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src="/Bootstrap_Logo.svg" width={28} height={28} alt="Logo" />
            <span className="fw-semibold">Mi Sitio</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#main">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Sección</a></li>
              <li className="nav-item"><a className="nav-link" href="#footer">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}