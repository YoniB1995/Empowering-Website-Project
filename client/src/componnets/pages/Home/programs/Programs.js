import "animate.css";
import { Button, Card } from "antd";
import { useEffect } from "react";
import "./programs.css";
const Programs = () => {
  const { Meta } = Card;

  return (
    <div className="programs-wrapper">
      <div className="programs-header">
        <h3>תוכניות</h3>
        <div className="programs-header-decertion"></div>
      </div>
      <div className="cards-wrapper">
        <Card
          hoverable
          style={{ width: 240, background: "#FFDEDE" }}
          cover={<img alt="example" src="./programs-vector.jpg" />}
        >
          <Meta title="" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, background: "#FFDEDE" }}
          cover={<img alt="example" src="./programs-vector.jpg" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, background: "#FFDEDE" }}
          cover={<img alt="example" src="./programs-vector.jpg" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, background: "#FFDEDE" }}
          cover={<img alt="example" src="./programs-vector.jpg" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </div>
  );
};

export default Programs;
