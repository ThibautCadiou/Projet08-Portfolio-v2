export default function Header() {
  return (
    <header className="header">
      <div className="header--logo">
        <img
          className="header--logo__img"
          src="./public/assets/photo-lkd.jpg"
          alt="Photo thibaut cadiou"
        />
      </div>
      <nav className="navigation">
        <a href="#accueil" className="navigation--onglet">
          Accueil
        </a>
        <a href="#portfolio" className="navigation--onglet">
          Portfolio
        </a>
        <a href="#reseaux" className="navigation--onglet">
          Réseaux{" "}
        </a>
        <a href="#contact" className="navigation--onglet">
          Contact
        </a>
      </nav>
    </header>
  );
}
