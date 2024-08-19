// function Onglet() {
//   return <h2>Onglet</h2>;
// }

function App() {
  return (
    <div>
      <header className="header">
        <div className="header--logo">
          <img
            className="header--logo__img"
            src="./src/assets/photo-lkd.jpg"
            alt="Photo thibaut cadiou"
          />
        </div>
        <nav className="navigation">
          <div className="navigation--onglet">Accueil</div>
          <div className="navigation--onglet">Portfolio</div>
          <div className="navigation--onglet">Formations</div>
          <div className="navigation--onglet">Expériences</div>
          <div className="navigation--onglet">Réseaux </div>
          <div className="navigation--onglet">Contact</div>
        </nav>
      </header>

      <main className="main">
        <section className="main--section">
          <h1>Accueil</h1>
        </section>
        <section className="main--section">
          <h2>Portfolio</h2>
        </section>
        <section className="main--section">
          <h2>Formations</h2>
        </section>
        <section className="main--section">
          <h2>Expériences</h2>
        </section>
        <section className="main--section">
          <h2>Réseaux </h2>
        </section>
        <section className="main--section contact">
          <h2>Contact</h2>

          <p>
            Vous pouvez me contacter par mail ou par téléphone aux coordonnées
            suivantes:
          </p>
          <p>cadioucontact@gmail.com</p>
          <p>06 66 05 09 83</p>
        </section>
      </main>

      <footer className="footer">
        <p className="footer--text">Copyright Thibaut CADIOU - 2024</p>
      </footer>
    </div>
  );
}

export default App;
