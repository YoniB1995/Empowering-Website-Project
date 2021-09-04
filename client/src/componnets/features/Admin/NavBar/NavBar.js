import { Link } from "react-router-dom";
import { Menu, Avatar } from 'antd';
import 'antd/dist/antd.css'
import './navBar.css';
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContextProvider";

export const NavBar = () => {
    const {isLogin} = useContext(AuthContext);
    return (
        <div className="navBar">
            <Avatar className="logo" src="logo.jpg" alt="logo"><Link to='./'></Link></Avatar>
            <Menu className="navBarLinks" mode="horizontal">
                <Link to='/Donations' className="donationsBtn"> 

                {isLogin?(
                <Link to='/logout'> 
                <Menu.Item  >
                התנתקות
                </Menu.Item></Link> 
                ):null}
              

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