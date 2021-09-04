import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import {AuthContext} from "../contexts/AuthContextProvider";



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
// import RegistrasionForm from "../componnets/features/Forms/Registration";
import Articles from "../componnets/features/Articles/Articles";
import WorkersCards from "../componnets/features/workersCards/WorkersCards";
import Article from "../componnets/features/Article/Article";
import Product from "../componnets/pages/Product/Product";

import FormsTemporary from "../componnets/features/Forms/FormsTemporary/FormsTemporary";
import Logout from "../componnets/features/Forms/FormsTemporary/Logout"

export default function AppRouter  () {
  const { userClearLocalStorage } = useContext(AuthContext);


  if (userClearLocalStorage) {
    return <Redirect to="/logout" />;
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
        <ProtectedRoute path="/logout" component={Logout}/>

        <ProtectedRoute
          path="/Admin/ArticleDetails"
          component={ArticleDetails}
        />
        <ProtectedRoute
          path="/Admin/EditArticles/:id"
          component={EditArticles}
        />
        <ProtectedRoute path="/Admin/NewArticles" component={NewArticles} />
        <ProtectedRoute path="/Admin/ArticleEditor" component={ArticleEditor} />
      </Switch>
    </div>
  );
};

