import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import NavBar from "./componnets/features/NavBar/NavBar";
import Footer from "./componnets/features/Footer/Footer";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Contect from "./componnets/pages/Admin/Contect/Contect";
import Contact from "./componnets/pages/Admin/Contact/Contact";
import Data from "./componnets/pages/Admin/Data/Data";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <Router>
          <AuthContextProvider>
            <NavBar />
            <AppRouter />
            {/* <Footer /> */}
            <Data />
            {/* <Contect/> */}
            {/* <Contact/> */}
          </AuthContextProvider>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
