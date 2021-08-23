/* eslint-disable no-unused-vars */
import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import Card from "./componnets/features/card/Card";
import ImageSlider from "./componnets/features/Slider/imageSlider";
=======
// import LoginForm from "./componnets/Forms/LoginForm";
// import ArticleEditor from "./componnets/Forms/ArticleEditor";
// import ForgotPasswordForm from "./componnets/Forms/ForgotPasswordForm";
import {BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom';
import AppRouter from "./AppRouter/AppRouter";
// import Card from "./componnets/features/card/Card";
// import ImageSlider from "./componnets/features/Slider/imageSlider";
// import PrivateRoute from "./componnets/features/routes/PrivateRoute";

// import Input from "./componnets/features/Input/Input";
// import AdminPage from "./componnets/pages/AdminPage";
>>>>>>> main

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
