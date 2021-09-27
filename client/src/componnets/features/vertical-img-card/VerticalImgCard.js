import "./vertical-img-card.css";
const VerticalImgCard = (props) => {
  const { title, img, description } = props;
  console.log(title)
  return (
    <div className="card">
      <div className="img-container">
        <img src={img} alt="vision-vector" id="img-card" />
      </div>
      <div className="card-body">
        <div className="header">
          <div className="header-decoration"></div>
          <h3 className="card-title" style={{color:"black"}}>{title}</h3>
        </div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};

export default VerticalImgCard;
