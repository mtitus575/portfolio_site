import ExpertiseItemsCard from "./ExpertiseItemsCard";
import expertTech from "./expertise_info";

function Expertise_Card() {
  const itemCard = expertTech.map((tech, index) => {
    return <ExpertiseItemsCard key={index} expertObject={tech} />;
  });

  return (
    <section className="expert-ctn">
      <h2>Techology Expertise</h2>
      <p>I have experience working with these technologies</p>
      <section className="expert-card-ctn">{itemCard}</section>
    </section>
  );
}

export default Expertise_Card;
