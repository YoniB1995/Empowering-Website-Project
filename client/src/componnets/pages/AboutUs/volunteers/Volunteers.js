import { Button, Card } from "antd";
import { useState } from "react";
import "./volunteers.css";
const { Meta } = Card;

const Volunteers = () => {
  const [cardOnHover, setCardOnHover] = useState(false);

  const titleDisplay = cardOnHover ? "visible" : "hidden";
  const cardImgStyle = cardOnHover ? "#FDFCE5" : "#F5AD88";

  const imgOnMouseHover = () => {
    setCardOnHover(true);
  };
  const imgOnMouseOut = () => {
    setCardOnHover(false);
  };
  const volunteersMembers = [
    {
      fullname: "רחלי טסדה מלכאי",
      role: "יזמית,מייסדת ומנכלית העמותה",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "נולדה באתיופיה בשנת 1983 עלתה ארצה יחד עם משפחתה בשנת 1991 במבצע שלמה נשואה +3 בעלת תואר במשפטים ממכללת אשקלון",
    },
    {
      fullname: "רחלי טסדה מלכאי",
      role: "יזמית,מייסדת ומנכלית העמותה",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "נולדה באתיופיה בשנת 1983 עלתה ארצה יחד עם משפחתה בשנת 1991 במבצע שלמה נשואה +3 בעלת תואר במשפטים ממכללת אשקלון",
    },
    {
      fullname: "רחלי טסדה מלכאי",
      role: "יזמית,מייסדת ומנכלית העמותה",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "נולדה באתיופיה בשנת 1983 עלתה ארצה יחד עם משפחתה בשנת 1991 במבצע שלמה נשואה +3 בעלת תואר במשפטים ממכללת אשקלון",
    },
    {
      fullname: "רחלי טסדה מלכאי",
      role: "יזמית,מייסדת ומנכלית העמותה",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "נולדה באתיופיה בשנת 1983 עלתה ארצה יחד עם משפחתה בשנת 1991 במבצע שלמה נשואה +3 בעלת תואר במשפטים ממכללת אשקלון",
    },
    {
      fullname: "רחלי טסדה מלכאי",
      role: "יזמית,מייסדת ומנכלית העמותה",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "נולדה באתיופיה בשנת 1983 עלתה ארצה יחד עם משפחתה בשנת 1991 במבצע שלמה נשואה +3 בעלת תואר במשפטים ממכללת אשקלון",
    },
    {
      fullname: "רחלי טסדה מלכאי",
      role: "יזמית,מייסדת ומנכלית העמותה",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "נולדה באתיופיה בשנת 1983 עלתה ארצה יחד עם משפחתה בשנת 1991 במבצע שלמה נשואה +3 בעלת תואר במשפטים ממכללת אשקלון",
    },
  ];
  const title = <p>רחלי טסדה מלכאי</p>;
  const role = <p>יזמית,מייסדת ומנכל"ית העמותהה </p>;
  const description = (
    <div>
      {role} נולדה באתיופיה בשנת 1983 עלתה ארצה יחד עם משפחתה בשנת 1991 במבצע
      שלמה נשואה +3 בעלת תואר במשפטים ממכללת אשקלון{" "}
    </div>
  );
  return (
    <div className="volunteers-wrapper">
      <div className="volunteers-header-container">
        <h3 className="volunteers-title">הכירו את המתנדבים שלנו</h3>

        <div className="volunteers-header-decoration"></div>
      </div>
      <div className="cards-container">
        {volunteersMembers.map((member) => (
          <Card
            className="volunteers-card"
            hoverable
            cover={
              <img
                className="volunteers-img"
                style={{}}
                alt="example"
                src={member.image}
              />
            }
          >
            <Meta
              title={
                <div>
                  <p>{member.fullname}</p>
                  {member.role}
                </div>
              }
              description={member.description}
              className="card-title"
            />
            <div className="volunteers-btn">
              <Button
                size="middle"
                shape="round"
                style={{
                  background: "#D1D9D9",
                  borderColor: "white",
                  color: "black",
                }}
              >
                מזער
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
