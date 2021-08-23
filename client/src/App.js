/* eslint-disable no-unused-vars */
import "./App.css";
<<<<<<< HEAD
import Card from "./componnets/features/card/Card";
import ImageSlider from "./componnets/features/Slider/imageSlider";
import LoginForm from "./componnets/Forms/LoginForm";
import ArticleEditor from "./componnets/Forms/ArticleEditor";
import ForgotPasswordForm from "./componnets/Forms/ForgotPasswordForm";
import {BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom';
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import Card from "./componnets/features/card/Card";
import ImageSlider from "./componnets/features/Slider/imageSlider";
>>>>>>> 463119fc6748ba7d488dd4401ba396e2c72e8433
=======
import PrivateRoute from "./componnets/features/routes/PrivateRoute";
>>>>>>> yoni-branch

import Input from "./componnets/features/Input/Input";
import AdminPage from "./componnets/pages/AdminPage";

function App() {
  return (
    <>
<<<<<<< HEAD
    <Router>
      <Input />
              <Link to="/login"><button>Go to Login</button></Link>

      <Switch>
        <Route exact path ="/" />
        <Route  path ="/login" component={LoginForm} />
        <Route  path ="/edit" component={ArticleEditor} />
        <Route  path ="/forgotpass" component={ForgotPasswordForm} />
        <PrivateRoute component={AdminPage} exact path="/admin"  /> 
        {/*בשביל לעשות יותר מראוט אחד יש להפוך את הרידרקט לסרטינג גנרי  */}
        <Route component={localStorage.jwtToken ? null : null} />
                {/*מוודא אם למשתמש יש טוקן,במידה וכן הוא יהיה מחובר לאתר, במידה ולא אפשר להפנות אותו לדף שגיאה / חיבור מחדש */}

      </Switch>
      {/* <ImageSlider /> */}
      {/* <Card /> */}
    </Router>
=======
      <Router>
        <AppRouter />
      </Router>
      main
>>>>>>> 463119fc6748ba7d488dd4401ba396e2c72e8433
    </>
  );
}

export default App;
