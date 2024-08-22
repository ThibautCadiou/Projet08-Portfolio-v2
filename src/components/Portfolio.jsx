import Card from "./Card";
import projectsData from "../datas/projects.json";

export default function Portfolio() {
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
