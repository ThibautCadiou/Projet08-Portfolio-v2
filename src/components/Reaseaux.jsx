export default function Reseaux() {
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
