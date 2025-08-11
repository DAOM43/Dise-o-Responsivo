import Header from "./components/Header";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="main" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold">Diseño Responsivo con Bootstrap</h1>
              <p className="lead">
                Ejemplo con Header, contenido principal, sección de tarjetas y Footer.
                Las tarjetas cambian de 1 → 2 → 3 columnas según el tamaño de pantalla.
              </p>
              <a href="#features" className="btn btn-primary btn-lg">Ver tarjetas</a>
            </div>
            <div className="col-lg-6 text-center">
              {/* usamos el logo que ya está en /public */}
              <img src="/Bootstrap_Logo.svg" className="img-fluid" alt="Logo" width={400} height={400} />
            </div>
          </div>
        </div>
      </main>

      <section id="features" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Tarjetas</h2>
          <CardsSection />
        </div>
      </section>

      <Footer />
    </>
  );
}