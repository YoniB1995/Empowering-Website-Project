import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

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
import Articles from "../componnets/features/Articles/Articles";
import WorkersCards from "../componnets/features/workersCards/WorkersCards";
import Article from "../componnets/features/Article/Article";
import NavBar from "../componnets/features/NavBar/NavBar";

import FormsTemporary from "../componnets/features/Forms/FormsTemporary/FormsTemporary";
import Footer from "../componnets/features/Footer/Footer";

export default function AppRouter() {
  return (
    <div>
    

      {/* <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1000px",
        }}
      >
        <li>
          <Link to="/WorkersCards">WorkersCards</Link>
        </li>
        <li>
          <Link to="/Articles">Articles</Link>
        </li>
        <li>
          <Link to="/Admin/ArticleEditor"> Admin ArticleEditor</Link>
        </li>
      </ul> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/WorkersCards" component={WorkersCards} />
        <Route path="/Programs" component={Programs} />
        <Route path="/Donations" component={Donations} />
        <Route path="/Store" component={Store} />
        <Route path="/Newsletter" component={Newsletter} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Articles" component={Articles} />
        <Route path="/Article/:id" component={Article} />

        <Route path="/Admin/ArticleDetails" component={ArticleDetails} />
        <Route path="/Admin/EditArticles/:id" component={EditArticles} />
        <Route path="/Admin/NewArticles" component={NewArticles} />
        <Route path="/Admin/ArticleEditor" component={ArticleEditor} />
      </Switch>
    </div>
  );
}
