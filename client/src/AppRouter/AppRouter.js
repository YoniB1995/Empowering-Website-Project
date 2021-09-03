import React, { useEffect, useState } from "react";
import { Switch, Route, Link, Router } from "react-router-dom";

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
import RegistrasionForm from "../componnets/features/Forms/Registration";
import Articles from "../componnets/features/Articles/Articles";
import WorkersCards from "../componnets/features/workersCards/WorkersCards";
import Article from "../componnets/features/Article/Article";
import NavBar from "../componnets/features/NavBar/NavBar";
import Product from "../componnets/pages/Product/Product";

import FormsTemporary from "../componnets/features/Forms/FormsTemporary/FormsTemporary";
import Footer from "../componnets/features/Footer/Footer";

export default function AppRouter() {

  const isAuth = !!localStorage.getItem("token");

  let routes = null

  if (isAuth) {
    routes = (
      <Switch>
        <Route path="/Admin/ArticleDetails" component={ArticleDetails} />
        <Route path="/Admin/EditArticles/:id" component={EditArticles} />
        <Route path="/Admin/NewArticles" component={NewArticles} />
        <Route path="/Admin/ArticleEditor" component={ArticleEditor} />
      </Switch>
    );
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/WorkersCards" component={WorkersCards} />
        <Route path="/Programs" component={Programs} />
        <Route path="/Donations" component={Donations} />
        <Route path="/Store" component={Store} />
        <Route path="/Product/:id" component={Product} />

        <Route path="/Newsletter" component={Newsletter} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Articles" component={Articles} />
        <Route path="/Article/:id" component={Article} />
        <Route path="/form" component={FormsTemporary} />
        {routes}
      </Switch>
    </div>
  );
}
