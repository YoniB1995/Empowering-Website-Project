/* eslint-disable no-unused-vars */
import "./App.css";
// import LoginForm from "./componnets/Forms/LoginForm";
// import ArticleEditor from "./componnets/Forms/ArticleEditor";
// import ForgotPasswordForm from "./componnets/Forms/ForgotPasswordForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import Home from "./componnets/pages/Home/Home";
import Footer from "./componnets/features/Footer/Footer";
import NavBar from "./componnets/features/NavBar/NavBar";


function App() {
  return (
    <>
      <Router>
        <NavBar/> 
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
