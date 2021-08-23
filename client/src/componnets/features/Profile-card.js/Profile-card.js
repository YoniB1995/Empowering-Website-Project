import { Card } from "antd";
import { useState } from "react";
import "./Profile-card.css";
import "antd/dist/antd.css";

const ProfileCard = () => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      className="cardProfile"
      style={{ width: 240, height: 240 }}
      cover={
        <div className="img-container">
          <img
            id="img-profile"
            style={{}}
            alt="example"
            src="https://media.nature.com/lw800/magazine-assets/d41586-020-03186-4/d41586-020-03186-4_18584670.jpg"
          />
        </div>
      }
    >
      <Meta
        className="meta"
        title="Lorem Lorem"
        description="lorem lorem lorem lorem lorem lorem lorem "
      />
    </Card>
  );
};

export default ProfileCard;
