/* eslint-disable react/prop-types */

export default function Card({ projectObj }) {
  const hasBeenDeployed = projectObj.urlSite != null ? true : false;
  const phraseCompetences = projectObj.tags.join("; ") + ";";

  if (hasBeenDeployed) {
    return (
      <div href="#" className="card">
        <img src={projectObj.imagesUrl} alt="" className="card--left-element" />
        <div className="card--right-element">
          <h3 className="card--title">{projectObj.name}</h3>
          <p className="card--description">
            <span>Description : </span>
            {projectObj.contexte}
          </p>
          <p className="card--problematique">
            <span>Problematiques : </span>
            {projectObj.problematiques}
          </p>
          <p className="card--compétences">
            <span>Compétences développées: </span>
            {phraseCompetences}
          </p>
          <a href={projectObj.urlGithub}>Lien vers répertoire github</a>
          <a href={projectObj.urlSite}>Lien vers site déployé</a>
        </div>
      </div>
    );
  } else {
    return (
      <div href="#" className="card">
        <img src={projectObj.imagesUrl} alt="" className="card--left-element" />
        <div className="card--right-element">
          <h3 className="card--title">{projectObj.name}</h3>
          <p className="card--description">{projectObj.contexte}</p>
          <a href={projectObj.urlGithub}>Lien vers répertoire github</a>
          <a href={projectObj.urlSite}>Lien vers site déployé</a>
        </div>
      </div>
    );
  }
}
