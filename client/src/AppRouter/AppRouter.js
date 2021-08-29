import React from "react";
import { Switch, Route } from "react-router-dom";

import Card from "../componnets/features/card/Card";
import ImageSlider from "../componnets/features/Slider/imageSlider";
import LoginForm from "../componnets/features/Forms/LoginForm";
import ArticleDetails from "../componnets/features/Admin/ArticleDetails/ArticleDetails";
import EditArticles from "../componnets/features/Admin/EditArticles/EditArticles";
import NewArticles from "../componnets/features/Admin/NewArticles/NewArticles";
import ArticleEditor from "../componnets/Forms/ArticleEditor";
import Home from "../componnets/pages/Home/Home";
import Programs from "../componnets/pages/Programs/Programs";
import Donations from "../componnets/pages/Donations/Donations";
import Store from "../componnets/pages/Store/Store";
import Newsletter from "../componnets/pages/Newsletter/Newsletter";
import ContactUs from "../componnets/pages/ContactUs/ContactUs";
import AboutUs from "../componnets/pages/AboutUs/AboutUs";
import NavBar from '../componnets/features/NavBar/NavBar'
import Articles from "../componnets/features/Articles/Articles";
import WorkersCards from "../componnets/features/workersCards/WorkersCards";
import ProgramCards from "../componnets/features/Program cards/ProgramCards";
import SliderStore from "../componnets/features/Slider/SliderStore";


export default function AppRouter () {
  return (
    <div>
      <NavBar/>
      <ImageSlider />
      <ProgramCards/> 
      {/* <LoginForm /> */}
       {/* <WorkersCards />  */}
      {/* <SliderStore/> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Programs" component={Programs} />
        <Route path="/Donations" component={Donations} />
        <Route path="/Store" component={Store} />
        <Route path="/Newsletter" component={Newsletter} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Articles" component={Articles} />
        
        <Route path="/Admin/ArticleDetails" component={ArticleDetails} />
        <Route path="/Admin/EditArticles" component={EditArticles} />
        <Route path="/Admin/NewArticles" component={NewArticles} />
        <Route path="/Admin/ArticleEditor" component={ArticleEditor} />

      </Switch>
    </div>
  );
};

