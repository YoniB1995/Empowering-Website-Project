/* eslint-disable no-unused-vars */
import "./App.css";
// import LoginForm from "./componnets/Forms/LoginForm";
// import ArticleEditor from "./componnets/Forms/ArticleEditor";
// import ForgotPasswordForm from "./componnets/Forms/ForgotPasswordForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import { NavBar } from "./componnets/features/Admin/NavBar/NavBar";
import Home from "./componnets/pages/Home/Home";
import Footer from "./componnets/features/Footer/Footer";
// import Card from "./componnets/features/card/Card";
// import ImageSlider from "./componnets/features/Slider/imageSlider";
// import PrivateRoute from "./componnets/features/routes/PrivateRoute";

// import Input from "./componnets/features/Input/Input";
// import AdminPage from "./componnets/pages/AdminPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <AppRouter /> */}
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
