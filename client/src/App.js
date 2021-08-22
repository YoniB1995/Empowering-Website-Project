import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter"


=======
import Card from "./componnets/features/card/Card";
import ImageSlider from "./componnets/features/Slider/imageSlider";
import LoginForm from "./componnets/Forms/LoginForm";
import ForgotPasswordForm from "./componnets/Forms/ForgotPasswordForm";
import {BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom';
>>>>>>> yoni-branch

import Input from "./componnets/features/Input/Input";
function App() {
  return (
    <>
<<<<<<< HEAD
      <Router>
        <AppRouter />
      </Router>
=======
    <Router>
      <Input />
              <Link to="/login"><button>Go to Login</button></Link>

      <Switch>
        <Route exact path ="/" />
        <Route  path ="/login" component={LoginForm} />
        <Route  path ="/forgotpass" component={ForgotPasswordForm} />

      </Switch>
      {/* <ImageSlider /> */}
      {/* <Card /> */}
    </Router>
>>>>>>> yoni-branch
    </>
  );
}

export default App;
