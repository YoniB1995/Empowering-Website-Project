import { Link } from "react-router-dom";
import { Menu, Avatar } from 'antd';
import './navBar.css';
import 'antd/dist/antd.css'
import ContactU from "../../pages/ContactUs/ContactU";

 const NavBar = () => {
    return (
        <div className="navBar">
            <Link to='./'><Avatar className="logo" src="logo.jpg" alt="logo"></Avatar></Link>
            <Menu className="navBarLinks" mode="horizontal">
                <Link to='/Donations' className="donationsBtn"> 
                <Menu.Item >
                לקחת חלק בשינוי
                </Menu.Item>
                </Link>
                <Link to='/ContactUs'> <Menu.Item  >
                <ContactU/>
                </Menu.Item> </Link>
                <Link to='/Newsletter'><Menu.Item  >
                ניוזלטר
                </Menu.Item></Link>
                <Link to='/CommerceJs'><Menu.Item  >
                חנות
                </Menu.Item></Link>
                <Link to='/Programs'><Menu.Item  >
                תוכניות
                </Menu.Item></Link>
                <Link to='/AboutUs'> <Menu.Item  >
                עלינו
                </Menu.Item></Link>
            </Menu>
        </div>
    )
}

export default NavBar;
