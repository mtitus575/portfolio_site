function ExpertiseItemsCard(props) {
  return (
    <section className="tech-card">
      <img className="techImg" src={props.expertObject.icon} />
      <h4 className="techName">{props.expertObject.name}</h4>
      <p className="techDescribe">{props.expertObject.description}</p>
    </section>
  );
}
export default ExpertiseItemsCard;
