import link_icon from "../media/external_link_icon.png";
import github_icon from "../media/github_icon.svg";

function ProjectItemCard(props) {
  return (
    <section className="prjct-card">
      <img src={props.projectObj.img} alt="project screebshot" />
      <section className="prjct-detail-ctn">
        <h2>{props.projectObj.name}</h2>
        <ul className="techUsed">
          {props.projectObj.techUsed.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <p>{props.projectObj.aboutProject}</p>
      </section>
      <section className="prjct-btn-ctn">
        <a href={props.projectObj.linkToRepo} target="_blank">
          <button className="btn">
            <img src={github_icon} width={"22rem"} />
            Code
          </button>
        </a>
        <a href={props.projectObj.linkToDemo} target="_blank">
          <button className="btn">
            <img src={link_icon} />
            Live Demo
          </button>
        </a>
      </section>
    </section>
  );
}
export default ProjectItemCard;
