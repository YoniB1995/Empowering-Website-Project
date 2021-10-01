import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { FacebookOutlined, MailOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "./Footer.css";

const { Header, Footer, Sider, Content } = Layout;

const Footer1 = () => {
  return (
    <footer>
      <div className="about">
        <div className="footer-header-container">
          <div className="footer-header-decortion"> </div>
          <h4 className="footer-title">אודות</h4>
        </div>
        <div>
          <ul>
            <li>תחום פעילות:פעילות חברתית </li>
            <li> סוג ארגון: עמותה חדשה </li>
            <li> מספר ארגון: 580706646</li>
          </ul>
        </div>
      </div>
      <div className="contect">
        <div className="footer-header-container">
          <div className="footer-header-decortion"> </div>
          <h4 className="footer-title">צרו קשר</h4>
        </div>
        <div>
          <img
            src="./placeholder.png"
            alt="plachholder-icon"
            id="footer-placeholder-icon"
          />
          ההסתדרות, 3, אשקלון, 7827804
        </div>
        <div className="contact-footer-btn">
          <div className="footer-mail">
            <p>
              {" "}
              <MailOutlined style={{ fontSize: "20px", padding: "5px" }} />
              ליצירת קשר במייל
            </p>
            <Link to="/ContactU">
              <Button
                shape="round"
                size="middle"
                style={{
                  width: "100px",
                  background: "#F1CCB9",
                  marginRight: "10px",
                }}
              >
                לחצ/י
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="footer-header-container">
          <div className="footer-header-decortion"></div>
          <h4 className="footer-title">הצטרפו לניוזלטר</h4>
        </div>
        <div className="join-newsletter-form">
          <div>
            <Input
              placeholder="מייל"
              shape="round"
              style={{ width: "200px" }}
            ></Input>
          </div>
          <Button
            shape="round"
            size="middle"
            style={{
              width: "100px",
              background: "#F1CCB9",
              marginRight: "10px",
            }}
          >
             שלח
          </Button>
        </div>
        <div className="footer-facebook">
          <FacebookOutlined style={{ fontSize: "20px" }} />
          <p> נשים אתיופיות מעצימות גם בפייסבוק </p>
        </div>
      </div>
    </footer>
    // </Footer>
  );
};
export default Footer1;
