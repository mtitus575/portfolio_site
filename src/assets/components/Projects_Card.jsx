import ProjectItemCard from "./ProjectItemCard";
import projectsDone from "./projects_info"

function Projects_Card() {
    const individualPrjctCard = projectsDone.map((project, index) => {
    return <ProjectItemCard key={index} projectObj={project} />;
  });

  return (
    <div className="prjcts-container">
      <h2>Featured Projects</h2>
      <p>Explore some of my recent work and personal projects</p>
      <section className="prjcts-card-container">{individualPrjctCard}</section>
    </div>
  );
}

export default Projects_Card;
