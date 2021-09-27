import { Button, Card } from "antd";
import { useState } from "react";

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
  const staffMembers = [
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
    <div className="staff-wrapper">
      <h1>{titleDisplay}</h1>
      <div className="staff-header-container">
        <h3 className="staff-title">הכירו את המתנדבים שלנו</h3>

        <div className="staff-header-decoration"></div>
      </div>
      <div className="cards-container">
      {staffMembers.map((member) => (
        <Card
          onMouseOver={imgOnMouseHover}
          onMouseOut={imgOnMouseOut}
          className="staff-card"
          hoverable
          cover={
            <img
              className="staff-img"
              style={{
                borderRadius: "100%",
                padding: "5px",
                width: "220px",
                height: "220px",
                margin: "auto",
              }}
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
          <div className="staff-btn">
          <Button
            size="middle"
            shape="round"
            style={{
              background: "black",
              borderColor: "white",
              color: "white",
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
