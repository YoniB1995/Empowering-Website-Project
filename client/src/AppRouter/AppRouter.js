import React from "react";
import { Switch, Route } from "react-router-dom";

import Card from "../componnets/features/card/Card";
import ImageSlider from "../componnets/features/Slider/imageSlider";
import LoginForm from "../componnets/Forms/LoginForm";
import ForgotPasswordForm from "../componnets/Forms/ForgotPasswordForm";
import Input from "../componnets/features/Input/Input";
import Home from "../componnets/pages/Home/Home";
import Programs from "../componnets/pages/Programs/Programs";
import Donations from "../componnets/pages/Donations/Donations";
import Store from "../componnets/pages/Store/Store";
import Newsletter from "../componnets/pages/Newsletter/Newsletter";
import ContactUs from "../componnets/pages/ContactUs/ContactUs";
import AboutUs from "../componnets/pages/AboutUs/AboutUs";
import { NavBar } from "../componnets/features/NavBar/NavBar";

const AppRouter = () => {
  return (
    <div>
      <NavBar/>
      <ImageSlider />
       <Card /> 
       <LoginForm />
      <ForgotPasswordForm /> 

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Programs" component={Programs} />
        <Route path="/Donations" component={Donations} />
        <Route path="/Store" component={Store} />
        <Route path="/Newsletter" component={Newsletter} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
    </div>
  );
};

export default AppRouter;
