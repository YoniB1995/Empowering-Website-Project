import "animate.css";
import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import WOW from "wowjs";
import { ReadOutlined  } from "@ant-design/icons";

import "./programs.css";
const Programs = () => {
  const { Meta } = Card;
  const [clickedIndex, setClickedIndex] = useState(false);
  const cardProgramOn = 'color:"white",marginLeft:"5px"';

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const programs = [
    {
      title: "קורס יזמות עסקית",
      description:
        "התוכניות מיועדת לבעלות עזקים ויזמיות בתחומים מגוונים בעלות פוטנציאל אישי עסקי ואישי התוכנית תקנה כלים ניהוליים בתהליך המורכב של הפיכת רעיון לעסק מצליח בתוכנית ילמדו הנשים איך לבנות תוכנית עבודה ואיך להגדיר צעדים להקמת עסק התוכנית היא בשיתוף פעולה ",
    },
    {
      title: "השכלה גבוהה",
      description:
        " תוכנית השכלה גבוהה תיתן הכוונה וייעוץ לנשים אשר מעוניינות ללמוד ולשפר את איכות חייהן וחיי משפחתן התוכנית תחשוף בפני הנשים את המוסדות הלימוד ותוכניות הקיימות בכל הארץ ואף תסייע במציאת מלגות ונשאף אף למתן מלגות לימוד",
    },
    {
      title: "תוכנית העצמה נשית",
      description:
        "הכרת כלים לשיפור היכולת האישית של נשים בעבודה בחברה ובמשפלה ובינהם חוק למניעת הטרדה מינית חוק עבודת נשים וחוק שווי זכויות האישה חוק שיווי זכויות האישה וחוק השיוון זכיות הזדמניות  אסרטביות ככלי מרכזי להעצמת נשים הפמינזם ככלי מרכזי להעצמת נשים",
    },
  ];

  const ImgDisappearedOnHover = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <div className="programs-wrapper">
      <div className="programs-header">
        <h3 style={{ color: "#D57E7E", fontSize: "32px" }}>תוכניות</h3>
        <div className="programs-header-decertion"></div>
      </div>
      <div className="cards-wrapper">
        {programs.map((program, index) => (
          <Card
            className="program-card"
            onClick={ImgDisappearedOnHover(index)}
            hoverable
            cover={
              clickedIndex[index] ? (
                <div className="program-card animate__animated animate__fadeInUp">
                  <div className="card-program-clicked-container">
                    <h2 className="program-clicked-header">{program.title} </h2>
                    <p className="program-clicked-description">
                      {program.description}
                    </p>
                    <div>
                      <img
                        className="img-program-card"
                        src="./logo-main1.jpeg" alt="program card img"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  className="program-card animate__animated animate__fadeIn"
                  alt="example"
                  src="./woman-vector.jpg"
                />
              )
            }
          >
            <Meta
              title={
                clickedIndex[index] ? (
                  ""
                ) : (
                  <h3 className="program-card-title">{program.title}<ReadOutlined style={{marginLeft:"4px"}} /></h3>
                )
              }
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programs;
