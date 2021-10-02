import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthContext } from '../contexts/AuthContextProvider';

import EditArticles from '../componnets/features/Admin/EditPlans/EditPlans';
import Home from '../componnets/pages/Home/Home';
import Programs from '../componnets/pages/Programs/Programs';
import Donations from '../componnets/pages/Donations/Donations';
import Newsletter from '../componnets/pages/Newsletter/Newsletter';
import AboutUs from '../componnets/pages/AboutUs/AboutUs';
// import RegistrasionForm from "../componnets/features/Forms/Registration";
import Articles from '../componnets/features/Plans/Plans';
import WorkersCards from '../componnets/features/workersCards/WorkersCards';
import Article from '../componnets/features/Plan/Plan';

import FormsTemporary from '../componnets/features/Forms/FormsTemporary/FormsTemporary';
import AddProduct from '../componnets/Forms/AddProduct/AddProduct';
import AddArticle from '../componnets/Forms/AddPlan';
import EditProducts from '../componnets/features/Admin/EditProducts/EditProducts';
import Logout from '../componnets/features/Forms/FormsTemporary/Logout';
import Contect from '../componnets/pages/Admin/Contect/Contect';
import CommerceJs from '../componnets/pages/commerce/Commerce';
import ContactU from '../componnets/pages/ContactUs/ContactUs';
import Contact from '../componnets/pages/Admin/Contact/Contact';

export default function AppRouter() {
  const { userClearLocalStorage } = useContext(AuthContext);

  if (userClearLocalStorage) {
    return <Redirect to='/logout' />;
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/WorkersCards' component={WorkersCards} />
        <Route path='/Programs' component={Programs} />
        <Route path='/Donations' component={Donations} />
        <Route path='/Newsletter' component={Newsletter} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/Plans' component={Articles} />
        <Route path='/Plan/:id' component={Article} />
        <Route path='/Admin/EditPlans/:id' component={EditArticles} />
        <Route path='/Admin/EditProducts/:id' component={EditProducts} />
        <Route path='/CommerceJs' component={CommerceJs} />
        <Route path='/ContactU' component={ContactU} />
        <Route path='/Admin/AddPlan' component={AddArticle} />
        <Route path='/Admin/AddProduct' component={AddProduct} />
        <Route path='/form' component={FormsTemporary} />
        <Route path='/test'><Contect /></Route>
        <Route path="/Contact" component={Contact}/> 
        <ProtectedRoute path='/logout' component={Logout} />

        <ProtectedRoute path='/Admin/EditArticles/:id' component={EditArticles}/>

      </Switch>
    </div>
  );
}
