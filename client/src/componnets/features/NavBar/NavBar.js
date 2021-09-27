import { Link } from "react-router-dom";
import React,{useEffect} from "react"
import { Menu, Avatar } from "antd";
import "antd/dist/antd.css";
import "./navBar.css";
import "antd/dist/antd.css";
import ContactU from "../../pages/ContactUs/ContactUs";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { GlobeIcon,lang } from "../../../i18next/I18next";




const NavBar = () => {

  const { t } = useTranslation();
  const currentLangCode = cookies.get("i18next") || "heb";
  const currentLang = lang.find((i) => i.code === currentLangCode);
  useEffect(() => {
    document.body.dir = currentLang.dir || "rtl";
    document.title = t("app_title");
  }, [currentLang, t]);

  return (
    <div className="navBar">
                  <div class="dropdown">
          <button
            class="btn btn-link dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <GlobeIcon />
          </button>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>          
                  {/* לעצב לאמצע */}
              <span>{t("languageglob")}</span> 
            </li>
            {lang.map(({ code, name, contry_code }) => (
              <li key={contry_code}>
                <button
                  class="dropdown-item"
                  disabled={code === currentLangCode}
                  onClick={() => i18next.changeLanguage(code)}
                >
                  <span
                    className={`flag-icon flag-icon-${contry_code} mx-2`}
                    style={{ opacity: code === currentLangCode ? 0.5 : 1 }}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      <Link to="./">
        <Avatar className="logo" src="./logo-main.jpg" alt="logo"></Avatar>
      </Link>
      <Menu className="navBarLinks" mode="horizontal" >
        <Link to="/">
          <Menu.Item>
            <div className="navbar-left-side">
              <div className="">
              </div>
              
                <Link to="/ContactU" >
                <Menu.Item className="menu-item-contact"> צור קשר</Menu.Item>
                </Link>
              
            </div>
          </Menu.Item>
        </Link>

        <Link to="/CommerceJs">
          <Menu.Item className="menu-item">{t("Store")}</Menu.Item>
        </Link>
        <Link to="/Donations">
          <Menu.Item className="menu-item">{t("Donations")}</Menu.Item>
        </Link>
        <Link to="/Programs">
          <Menu.Item className="menu-item">{t("Programs")}</Menu.Item>
        </Link>
        <Link to="/AboutUs">
          {" "}
          <Menu.Item className="menu-item">{t("About us")}</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
};

export default NavBar;
