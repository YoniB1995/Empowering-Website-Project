import './navBar.css'
export const NavBar = () => {
    return <nav>
        <input type="chekbox" id="check"></input>
        <label for="check" className="chekBtn"><i class="fa fa-bars"></i></label>
        <ul>
            <li><a href="#" className="donationsBtn">לקחת חלק בשינוי</a></li>
            <li><a href="#">צור קשר</a></li>
            <li><a href="#">ניוזלטר</a></li>
            <li><a href="#">חנות</a></li>
            <li><a href="#">תרומות</a></li>
            <li><a href="#">תוכניות</a></li>
            <li><a href="#">עלינו</a></li>
           
        </ul>
        <img className="logo" src="logoEew.jpg" alt="logo"></img>
    </nav>
}