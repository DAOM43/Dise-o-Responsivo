type CardItem = {
  id: number;
  title: string;
  text: string;
  img: string;
};

const items: CardItem[] = [
  { id: 1, title: "Card 1", text: "Descripción breve del contenido.", img: "/src/assets/cards/p1.jpg" },
  { id: 2, title: "Card 2", text: "Descripción breve del contenido.", img: "/src/assets/cards/p2.jpg" },
  { id: 3, title: "Card 3", text: "Descripción breve del contenido.", img: "/src/assets/cards/p3.jpg" },
  { id: 4, title: "Card 4", text: "Más contenido opcional.", img: "/src/assets/cards/p1.jpg" },
  { id: 5, title: "Card 5", text: "Más contenido opcional.", img: "/src/assets/cards/p2.jpg" },
  { id: 6, title: "Card 6", text: "Más contenido opcional.", img: "/src/assets/cards/p3.jpg" },
];

export default function CardsSection() {
  return (
    <div className="cards-grid">
      {items.map((it) => (
        <article key={it.id} className="card shadow-sm h-100">
          <img src={it.img} className="card-img-top" alt={it.title} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{it.title}</h5>
            <p className="card-text flex-grow-1">{it.text}</p>
            <a href="#" className="btn btn-outline-primary">Leer más</a>
          </div>
        </article>
      ))}
    </div>
  );
}