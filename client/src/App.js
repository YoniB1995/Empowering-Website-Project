import { useEffect } from "react";
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
  useEffect(() => {   
    window.addEventListener('load', function() { new Accessibility(options); }, false);
  });

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
  options.textToSpeechLang = 'he'; 
  options.speechToTextLang = 'he'; 

  return (
    <>
      <Suspense fallback="Loading...">
        <Router>
          <AuthContextProvider>
            <NavBar />
            <AppRouter />
            {/* <Footer /> */}
            {/* <Data /> */}
            {/* <Contect/> */}
            {/* <Contact/> */}
          </AuthContextProvider>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
