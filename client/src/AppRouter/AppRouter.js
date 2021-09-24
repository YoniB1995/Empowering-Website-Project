import React, { useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthContext } from '../contexts/AuthContextProvider';
import EditArticles from '../componnets/features/Admin/EditPlans/EditPlans';
import Home from '../componnets/pages/Home/Home';
import Programs from '../componnets/pages/Programs/Programs';
import Donations from '../componnets/pages/Donations/Donations';
import Newsletter from '../componnets/pages/Newsletter/Newsletter';
import ContactUs from '../componnets/pages/ContactUs/ContactUs';
import AboutUs from '../componnets/pages/AboutUs/AboutUs';
// import RegistrasionForm from "../componnets/features/Forms/Registration";
import Articles from '../componnets/features/Plans/Plans';
import WorkersCards from '../componnets/features/workersCards/WorkersCards';
import Article from '../componnets/features/Plan/Plan';
// import Product from '../componnets/pages/Product/Product';
import FormsTemporary from '../componnets/features/Forms/FormsTemporary/FormsTemporary';
import Footer from '../componnets/features/Footer/Footer';
import Products from '../componnets/features/Products/Products';
import Product from '../componnets/features/Product/Product';
import AddProduct from '../componnets/Forms/AddProduct/AddProduct';
import AddArticle from '../componnets/Forms/AddPlan';
import EditProducts from '../componnets/features/Admin/EditProducts/EditProducts';
import Logout from '../componnets/features/Forms/FormsTemporary/Logout';
import ProductsC from '../componnets/features/Products/ProductsC';
import CommerceJs from '../componnets/pages/commerce/Commerce';
import { Accessibility } from 'accessibility/src/main';
import './AppRouter.css';


export default function AppRouter() {
  const { userClearLocalStorage } = useContext(AuthContext);

  if (userClearLocalStorage) {
    return <Redirect to='/logout' />;
  }

  // Accessibility
  window.addEventListener('load', function () { new Accessibility(); },false);
  var labels = {
    resetTitle: 'רענן ',
    closeTitle: 'סגור ',
    menuTitle: 'נגישות ',
    increaseText: 'זום אין ',
    decreaseText: 'זום אאוט ',
    increaseTextSpacing: 'הגדל את מרווח הטקסט ',
    decreaseTextSpacing: 'הקטן את מרווח הטקסט ',
    invertColors: 'הפוך צבעים ',
    grayHues: 'גוונים אפורים ',
    underlineLinks: 'קישורים תחתונים ',
    bigCursor: 'סמן גדול ',
    readingGuide: 'מדריך קריאה ',
    textToSpeech: 'טקסט לדיבור ',
    speechToText: 'דיבור לטקסט '
};
  var options = { labels: labels };
  options.textToSpeechLang = 'he'; // עברית
  options.speechToTextLang = 'he'; // עברית
  new Accessibility(options);
  var options1 = {
    icon: {
        position: {
            bottom: { size: 50, units: 'px' },
            right: { size: 0, units: 'px' },
        }
    }
}
new Accessibility(options1);

  return (

    <div>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/WorkersCards' component={WorkersCards} />
        <Route path='/Programs' component={Programs} />
        <Route path='/Donations' component={Donations} />
        <Route path='/Store' component={Products} />
        <Route path='/Product/:id' component={Product} />
        <Route path='/Newsletter' component={Newsletter} />
        <Route path='/ContactUs' component={ContactUs} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/Plans' component={Articles} />
        <Route path='/Plan/:id' component={Article} />
        <Route path='/CommerceJs' component={CommerceJs} />
        <Route path='/Product/:id' component={Product} />
        <Route path='/Admin/EditPlans/:id' component={EditArticles} />
        <Route path='/Admin/EditProducts/:id' component={EditProducts} />
        <Route path='/Admin/AddPlan' component={AddArticle} />
        <Route path='/Admin/AddProduct' component={AddProduct} />
        <Route path='/form' component={FormsTemporary} />
        <ProtectedRoute path='/logout' component={Logout} />

        {/* <ProtectedRoute
          path="/Admin/ArticleDetails"
          component={ArticleDetails}
        /> */}
        <ProtectedRoute path='/Admin/EditArticles/:id' component={EditArticles}
        />
        {/* <ProtectedRoute path="/Admin/NewArticles" component={NewArticles} />
        <ProtectedRoute path="/Admin/ArticleEditor" component={ArticleEditor} /> */}
      </Switch>
    </div>
  );
}
