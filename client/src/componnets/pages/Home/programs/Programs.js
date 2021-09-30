import "animate.css";
import { Button, Card } from "antd";
import { useEffect, useState } from "react";

import "./programs.css";
const Programs = () => {
  const { Meta } = Card;
  const [isCardOnHover,setCardisonHover]=useState(false)

  const programs = [
    {
      title: "קורס יזמות עסקית",
      description:
        "התוכניות מיועדת לבעלות עזקים ויזמיות בתחומים מגוונים בעלות פוטנציאל אישי עסקי ואישי התוכנית תקנה כלים ניהוליים בתהליך המורכב של הפיכת רעיון לעסק מצליח בתוכנית ילמדו הנשים איך לבנות תוכנית עבודה ואיך להגדיר צעדים להקמת עסק התוכנית היא בשיתוף פעולה ",
    },
    {
      title: "השכלה גבוהה",
      description:
        " תוכנית השכלה גבוהה תיתן הכוונה וייעוץ לנשים אשר מעוניינות ללמוד ולשפר את איכות חייהן וחיי משפחתן התוכנית תחשוף בפני הנשים את המוסדות הלימוד ותוכניות הקיימות בכל הארץ ואף תסייע במציאת מלגות ונשאף אף ךמתן מךגות לימוד",
    },
    {
      title: "תוכנית העצמה נשית",
      description:
        "הכרת כלים לשיפור היכולת האישית של נשים בעבודה בחברה ובמשפלה ובינהם חוק למניעת הטרדה מינית חוק עבודת נשים וחוק שווי זכויות האישה חוק שיווי זכויות האישה וחוק השיוון זכיות הזדמניות  אסרטביות ככלי מרכזי להעצמת נשים הפמינזם ככלי מרכזי להעצמת נשים",
    },
  ];
    const ImgDisappearedOnHover=()=>{
      setCardisonHover(true)
    }
  return (
    <div className="programs-wrapper">
      <div className="programs-header">
        <h3>תוכניות</h3>
        <div className="programs-header-decertion"></div>
      </div>
      <div className="cards-wrapper">
        {programs.map((program) => (
          <Card
          // onMouseOver={}
            hoverable
            style={{ width: 300, background: "#303b32"}}
            cover={isCardOnHover?<div style={{width:"400px",height:"400px"}}>on hober</div>:<img alt="example" src="./woman-vector.jpg" />}
          >
            <Meta title={<p style={{color:"#798777",marginRight:"5px"}}>{program.title}</p>} style={{ textAlign: "center"}} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programs;
