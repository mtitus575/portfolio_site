import link_icon from '../media/external_link_icon.png';
import github_icon from '../media/github_black.png'


function ProjectItemCard (props) { 

    return (
        <>
        <img src={props.projectObj.img} alt="" />
        <h2>{props.projectObj.name}</h2>
        <ul>
            {props.projectObj.techUsed.map((tech) => <li>{tech}</li>)}
        </ul>
        <section>
            <button onclick="location.href={props.projectObj.linkToRepo}" type="button">
                <img src={github_icon} width={"20rem"}/>
                Code
            </button>
            <button onclick="location.href={props.projectObj.linkToDemo}" type="button">
                <img src={link_icon} alt="" />
                Live Demo
            </button>
        </section>
        </>
    );
}
export default ProjectItemCard;