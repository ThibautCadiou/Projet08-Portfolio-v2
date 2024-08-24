import Card from "./Card";
import projectsData from "../datas/projects.json";

export default function Portfolio() {
  return (
    <div className="main--section portfolio">
      <h2 id="portfolio" className="portfolio--title">
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
