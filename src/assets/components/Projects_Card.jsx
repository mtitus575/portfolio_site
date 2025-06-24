import ProjectItemCard from "./ProjectItemCard";
import projectsDone from "./projects_info";
import SelectionList from "./Projects_Select_List";
import { useState } from "react";

function Projects_Card() {
  const [selected, setSelected] = useState("all");

  // Filter projects based on selected category
  const filteredProjects =
    selected === "all"
      ? projectsDone
      : projectsDone.filter((project) => project.id === selected);

  const individualPrjctCard = filteredProjects.map((project, index) => {
    return <ProjectItemCard key={index} projectObj={project} id={project.id} />;
  });

  return (
    <div id="projects" className="prjcts-container">
      <h2>Featured Projects</h2>
      <p>Explore some of my recent work and personal projects</p>
      <SelectionList onSelect={setSelected} />
      <section className="prjcts-card-container">{individualPrjctCard}</section>
    </div>
  );
}

export default Projects_Card;
