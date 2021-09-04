import { Link } from "react-router-dom";
import { Menu, Avatar } from 'antd';
import 'antd/dist/antd.css'
import './navBar.css';

 const NavBar = () => {
    return (
        <div className="navBar">
            <Avatar className="logo" src="logo.jpg" alt="logo"><Link to='./'></Link></Avatar>
            <Menu className="navBarLinks" mode="horizontal">
                <Link to='/Donations' className="donationsBtn"> 
                <Menu.Item >
                לקחת חלק בשינוי
                </Menu.Item>
                </Link>
                <Link to='/ContactUs'> <Menu.Item  >
                 צור קשר
                </Menu.Item> </Link>
                <Link to='/Newsletter'><Menu.Item  >
                ניוזלטר
                </Menu.Item></Link>
                <Link to='/Store'><Menu.Item  >
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
