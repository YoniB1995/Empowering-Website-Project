import { Link } from "react-router-dom";
import { Menu, Avatar } from "antd";
import "antd/dist/antd.css";
import "./navBar.css";
import "antd/dist/antd.css";
import ContactU from "../../pages/ContactUs/ContactUs";


const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="./">
        <Avatar className="logo" src="./logo-main.jpg" alt="logo"></Avatar>
      </Link>
      <Menu className="navBarLinks" mode="horizontal" >
        <Link to="/">
          <Menu.Item>
            <div className="navbar-left-side">
              <div className="">
                <span id="langauge">ENG</span>

                <img
                  src="./language.png"
                  alt="language-icon"
                  id="language-icon"
                />
              </div>
              
                <Link to="/ContactU" >
                <Menu.Item className="menu-item-contact"> צור קשר</Menu.Item>
                </Link>
              
            </div>
          </Menu.Item>
        </Link>

        <Link to="/CommerceJs">
          <Menu.Item className="menu-item">חנות</Menu.Item>
        </Link>
        <Link to="/Donations">
          <Menu.Item className="menu-item">תרומות</Menu.Item>
        </Link>
        <Link to="/Programs">
          <Menu.Item className="menu-item">תוכניות</Menu.Item>
        </Link>
        <Link to="/AboutUs">
          {" "}
          <Menu.Item className="menu-item">עלינו</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
};

export default NavBar;
