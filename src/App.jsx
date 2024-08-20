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
          <div className="navigation--onglet">Réseaux </div>
          <div className="navigation--onglet">Contact</div>
        </nav>
      </header>

      <main className="main">
        <section className="main--section">
          <h1>Accueil</h1>
          <p className="paragraphe paragraphe__accueil">
            Je m&apos;appelle Thibaut Cadiou, jeune développeur web passionné
            par la création de solutions numériques innovantes. J&apos;ai un
            fort intérêt pour le frontend et le backend, ce qui me permet de
            maîtriser l&apos;ensemble du processus de développement d&apos;une
            application web. Mes principaux outils sont JavaScript, React,
            Node.js, Sass, et MongoDB. Actuellement à la recherche d&apos;un
            emploi, je suis ouvert à des opportunités en full remote ou à
            proximité de Saint-Lô. Si vous cherchez un développeur motivé et
            créatif, n&apos;hésitez pas à me contacter !
          </p>
        </section>
        <section className="main--section">
          <h2 className="main--section--title__portfolio">Portfolio</h2>
          <div className="cards">
            <a href="#" className="cards--card">
              <img src="" alt="" className="cards--card__img" />
              <p className="cards--card__text"></p>
            </a>
            <a href="#" className="cards--card">
              <img src="" alt="" className="cards--card__img" />
              <p className="cards--card__text"></p>
            </a>
          </div>
        </section>
        <div className="reseaux-et-contact">
          <section className="main--section reseaux-et-contact--reseaux main--section__bottom">
            <h2>Réseaux </h2>
            <p className="reseaux--text">
              Vous pouvez voir mon parcours de formations ainsi que mes
              expériences professionnelles en cliquant sur le logo Linkedin
              ci-dessous. Vous pouvez également voir mes répertoires de travail
              en tant que développeur sur mon compte Github en cliquant sur le
              logo ci-dessous
            </p>
            <div className="reseaux-et-contact--reseaux__logos">
              <a
                href="https://www.linkedin.com/in/thibaut-cadiou-4a8052309"
                target="_blank"
              >
                <img
                  className="reseaux-et-contact--reseaux__logo"
                  src="./src/assets/logo-linkedin.png"
                  alt="Logo Linkedin"
                />
              </a>
              <a href="https://github.com/ThibautCadiou" target="_blank">
                <img
                  className="reseaux-et-contact--reseaux__logo"
                  src="./src/assets/logo-github.png"
                  alt="Logo Github"
                />
              </a>
            </div>
          </section>
          <section className="main--section contact reseaux-et-contact--contact main--section__bottom ">
            <h2>Contact</h2>

            <p>
              Vous pouvez me contacter par mail ou par téléphone aux coordonnées
              suivantes:
            </p>
            <p>cadioucontact@gmail.com</p>
            <p>06 66 05 09 83</p>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p className="footer--text">Copyright Thibaut CADIOU - 2024</p>
      </footer>
    </div>
  );
}

export default App;
