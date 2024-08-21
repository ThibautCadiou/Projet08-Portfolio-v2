/* eslint-disable react/prop-types */
function Header() {
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

function Footer() {
  return (
    <footer className="footer">
      <p className="footer--text">Copyright Thibaut CADIOU - 2024</p>
    </footer>
  );
}

function Reseaux() {
  return (
    <section className="main--section reseaux-et-contact--reseaux main--section__bottom">
      <h2 id="reseaux">Réseaux </h2>
      <p className="reseaux--text">
        Vous pouvez voir mon parcours de formations ainsi que mes expériences
        professionnelles en cliquant sur le logo Linkedin ci-dessous. Vous
        pouvez également voir mes répertoires de travail en tant que développeur
        sur mon compte Github en cliquant sur le logo ci-dessous. Le dernier
        logo vous permet d&apos;accéder à mon CV depuis votre navigateur.
      </p>
      <div className="reseaux-et-contact--reseaux__logos">
        <a
          href="https://www.linkedin.com/in/thibaut-cadiou-4a8052309"
          target="_blank"
        >
          <img
            className="reseaux-et-contact--reseaux__logo"
            src="./public/assets/logo-linkedin.png"
            alt="Logo Linkedin"
          />
        </a>
        <a href="https://github.com/ThibautCadiou" target="_blank">
          <img
            className="reseaux-et-contact--reseaux__logo"
            src="./public/assets/logo-github.png"
            alt="Logo Github"
          />
        </a>
        <a href="./public/assets/cv.pdf" target="_blank">
          <img
            className="reseaux-et-contact--reseaux__logo"
            src="./public/assets/logo-pdf.png"
            alt="Logo PDF pour télécharger CV"
          />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="main--section contact reseaux-et-contact--contact main--section__bottom ">
      <h2 id="contact">Contact</h2>

      <p>
        Vous pouvez me contacter par mail ou par téléphone aux coordonnées
        suivantes:
      </p>
      <p>cadioucontact@gmail.com</p>
      <p>06 66 05 09 83</p>
    </section>
  );
}

function Accueil() {
  return (
    <section className="main--section">
      <h1 id="accueil">Accueil</h1>
      <p className="paragraphe paragraphe__accueil">
        Je m&apos;appelle Thibaut Cadiou, je suis un jeune développeur web
        passionné par la création de solutions numériques innovantes. Je viens
        de finir le parcours développeur Web via l&apos;organisme
        OpenClassrooms. J&apos;ai un fort intérêt pour le frontend et le
        backend, ce qui me permet de maîtriser l&apos;ensemble du processus de
        développement d&apos;une application web. Mes principales compétences
        sont: JavaScript, React, Node.js, Sass, et MongoDB. Actuellement à la
        recherche d&apos;un emploi, je suis ouvert à des opportunités en full
        remote ou à proximité de Saint-Lô. Si vous cherchez un développeur
        motivé et créatif, n&apos;hésitez pas à me contacter !
      </p>
    </section>
  );
}
const projectsData = [
  {
    name: "Booki",
    contexte:
      "Le site Booki est un projet ayant pour but de créer un prototype de site internet à présenter au client. Le site n'est qu'une maquette non-fonctionnelle mais qui sert de démonstrateur pour présenter le rendu du site. Le site à été réalisé en HTML et CSS;",
    problematiques: ["intégrer une maquette HTML CSS"],
    tags: ["HTML", "CSS"],
    urlSite: "https://thibautcadiou.github.io/Projet02-Booki/",
    urlGithub: "https://github.com/ThibautCadiou/Projet02-Booki",
    imagesUrl: ["./public/assets/p2-booki.png"],
  },
  {
    name: "Nina Carducci",
    contexte:
      "Le but de ce projet était de débugger un site internet qui avait certains bug (problemes avec le caroussel et le tri par catégorie des images). L'objectif était également d'optimiser le site internet afin d'améliorer le référencement de la photographe Nina Carducci afin qu'elle gagne en visibilité auprès de ces clients.",
    problematiques: ["Debugger un site internet"],
    tags: ["Google Dev Tool", "Optimisation", "SEO"],
    urlSite: "https://thibautcadiou.github.io/Projet04-Nina/",
    urlGithub: "https://github.com/ThibautCadiou/Projet03-Sophie-Front",
    imagesUrl: ["./public/assets/p4-nina.png"],
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 id="portfolio" className="main--section--title__portfolio">
        Portfolio
      </h2>
      <div className="cards">
        {projectsData.map((project) => (
          <Card projectObj={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  const hasBeenDeployed = props.projectObj.urlSite != null ? true : false;
  const phraseCompetences = props.projectObj.tags.join(" ;") + "";

  if (hasBeenDeployed) {
    return (
      <a href="#" className="card">
        <img
          src={props.projectObj.imagesUrl}
          alt=""
          className="card--left-element"
        />
        <div className="card--right-element">
          <h3 className="card--title">{props.projectObj.name}</h3>
          <p className="card--description">
            <span>Description : </span>
            {props.projectObj.contexte}
          </p>
          <p className="card--problematique">
            <span>Problematiques : </span>
            {props.projectObj.problematiques}
          </p>
          <p className="card--compétences">
            <span>Compétences développées: </span>
            {phraseCompetences}
          </p>
          <a href={props.projectObj.urlGithub}>Lien vers répertoire github</a>
          <a href={props.projectObj.urlSite}>Lien vers site déployé</a>
        </div>
      </a>
    );
  } else {
    return (
      <a href="#" className="card">
        <img
          src={props.projectObj.imagesUrl}
          alt=""
          className="card--left-element"
        />
        <div className="card--right-element">
          <h3 className="card--title">{props.projectObj.name}</h3>
          <p className="card--description">{props.projectObj.contexte}</p>
          <a href={props.projectObj.urlGithub}>Lien vers répertoire github</a>
          <a href={props.projectObj.urlSite}>Lien vers site déployé</a>
        </div>
      </a>
    );
  }
}

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Accueil />
        <Portfolio />
        <div className="reseaux-et-contact">
          <Reseaux />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
