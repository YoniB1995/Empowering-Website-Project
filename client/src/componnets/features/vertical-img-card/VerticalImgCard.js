import "./vertical-img-card.css";
const VerticalImgCard = (props) => {
  const { title, img, description } = props;
  console.log(title)
  return (
    <div className="vertical-card">
      <div className="vertical-card-img-container">
        <img src={img} alt="vision-vector" id="img-card" />
      </div>
      <div className="vertical-card-body">
        <div className="header">
          <div className="header-decoration"></div>
          <h3 className="vertical-card-title" style={{color:"black"}}>{title}</h3>
        </div>
        <div className="vertical-card-description">{description}</div>
      </div>
    </div>
  );
};

export default VerticalImgCard;
