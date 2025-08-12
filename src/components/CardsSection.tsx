type CardItem = {
  id: number;
  title: string;
  text: string;
  img: string;
};

const items: CardItem[] = [
  { id: 1, title: "Bootstrap", text: "Framework front-end que brinda componentes listos y un sistema de grid versátil para crear interfaces responsivas con rapidez.", img: "imagen1.jpeg" },
  { id: 2, title: "Grid de Bootstrap", text: "El sistema de cuadrícula utiliza filas y columnas que se ajustan automáticamente al tamaño del dispositivo para una estructura flexible.", img: "imagen2.jpg" },
  { id: 3, title: "Layout Responsivo", text: "Diseño que se adapta fluidamente a móviles, tabletas y escritorios, garantizando buena lectura y navegación en cualquier dispositivo.", img: "imagen3.jpeg" },
  { id: 4, title: "Mobile First", text: "Estrategia de diseño que prioriza el desarrollo para dispositivos móviles y luego escala hacia pantallas más grandes.", img: "imagen4.jpeg" },
  { id: 5, title: "Componentes UI listos", text: "Bootstrap ofrece botones, navbars, tarjetas y formularios personalizables que aceleran tu flujo de trabajo y garantizan coherencia visual.", img: "imagen5.jpg" },
  { id: 6, title: "Optimización y Usabilidad", text: "Un sitio responsivo bien hecho carga más rápido, es más accesible y mejora la experiencia del usuario en todos los dispositivos.", img: "imagen6.jpg" },
];

export default function CardsSection() {
  return (
    <div className="cards-grid">
      {items.map((it) => (
        <article key={it.id} className="card shadow-sm h-100">
          <img src={it.img} className="card-img-top" alt={it.title} />
          <div className="card-body">
            <h5 className="card-title">{it.title}</h5>
            <p className="card-text">{it.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
