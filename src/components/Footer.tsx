export default function Footer() {
  return (
    <footer id="footer" className="py-4 bg-dark text-light">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
        <p className="mb-0">© {new Date().getFullYear()} Mi Sitio</p>
        <ul className="nav gap-3">
          <li className="nav-item"><a className="nav-link px-0" href="https://facebook.com" target="_blank">Facebook</a></li>
          <li className="nav-item"><a className="nav-link px-0" href="https://instagram.com" target="_blank">Instagram</a></li>
          <li className="nav-item"><a className="nav-link px-0" href="https://x.com" target="_blank">X/Twitter</a></li>
          <li className="nav-item"><a className="nav-link px-0" href="https://github.com" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </footer>
  );
}