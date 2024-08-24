export default function Reseaux() {
  return (
    <section className="main--section main--section__bottom reseaux-et-contact--reseaux ">
      <h2 id="reseaux">Réseaux </h2>
      <p className="paragraphe">
        Vous pouvez voir mon parcours de formations ainsi que mes expériences
        professionnelles en cliquant sur le logo Linkedin. Vous pouvez également
        voir mes répertoires de travail en tant que développeur sur mon compte
        Github en cliquant sur le logo associé. Le dernier logo vous permet
        d&apos;accéder à mon CV depuis votre navigateur.
      </p>
      <div className="reseaux-et-contact--reseaux__logos">
        <a
          className="reseaux-et-contact--reseaux__logo"
          href="https://www.linkedin.com/in/thibaut-cadiou-4a8052309"
          target="_blank"
        >
          <img
            className="reseaux-et-contact--reseaux__logo"
            src="./assets/logo-linkedin.png"
            alt="Logo Linkedin"
          />
        </a>
        <a href="https://github.com/ThibautCadiou" target="_blank">
          <img
            className="reseaux-et-contact--reseaux__logo"
            src="./assets/logo-github.png"
            alt="Logo Github"
          />
        </a>
        <a href="./assets/cv.pdf" target="_blank">
          <img
            className="reseaux-et-contact--reseaux__logo"
            src="./assets/logo-pdf.png"
            alt="Logo PDF pour télécharger CV"
          />
        </a>
      </div>
    </section>
  );
}
