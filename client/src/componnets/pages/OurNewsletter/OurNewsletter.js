import { Button } from "antd";
import { Link } from "react-router-dom";
import ImageSlider from "../../features/Slider/ImageSlider";

const Ournewsletter = () => {
  return (
    <div>
      <ImageSlider />
      <div className="about-us wow animate__bounceInUp">
        <div className="about-us-wrapper">
          <div className="home-about-us-content"></div>

          <Button
            className="about-us-home-btn"
            size="large"
            shape="round"
            style={{
              margin: "auto",
              background: "white",
              borderColor: "white",
              color: "black",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            {/* {t("readMore")} */}
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Ournewsletter;