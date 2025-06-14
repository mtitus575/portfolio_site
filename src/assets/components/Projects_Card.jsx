import ProjectItemCard from "./ProjectItemCard";

function Projects_Card() {
    const projectDone = [
        {
            img: "https://file.path.com",
            name: "Project-name",
            techUsed: ["React", "CSS", "JavaScript"],
            aboutProject: "Short project description",
            linkToRepo: "https://file.path.com",
            linkToDemo: "https://file.path.com"
        },
        {
            img: "https://file.path.com2",
            name: "Project-name2",
            techUsed: ["React", "CSS", "JavaScript"],
            aboutProject: "Short project description2",
            linkToRepo: "https://file.path.com2",
            linkToDemo: "https://file.path.com2"
        }
    ]

    const individualPrjctCard = projectDone.map((project, index) => {
        return <ProjectItemCard key={index} projectObj={project} />
    });

    return (
        <div className="prjcts-container">
            <h2>Featured Projects</h2>
            <p>Explore some of my recent work and personal projects</p>
            <section>
                {individualPrjctCard}
            </section>
        </div>
    );
}

export default Projects_Card;
