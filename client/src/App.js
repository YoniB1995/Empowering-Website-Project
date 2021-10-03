import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import NavBar from "./componnets/features/NavBar/NavBar";
import Footer1 from "./componnets/features/Footer/Footer";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { Accessibility } from "accessibility/src/main";
import { Suspense } from "react";

function App() {
  useEffect(() => {
    window.addEventListener(
      "load",
      function () {
        new Accessibility(options);
      },
      false
    );
  });

  var labels = {
    resetTitle: "רענן ",
    closeTitle: "סגור ",
    menuTitle: "נגישות ",
    increaseText: "טקסט גדול ",
    decreaseText: "טקסט קטן ",
    increaseTextSpacing: "הגדל את מרווח הטקסט ",
    decreaseTextSpacing: "הקטן את מרווח הטקסט ",
    invertColors: "הפוך צבעים ",
    grayHues: "גוונים אפורים ",
    underlineLinks: "קישורים תחתונים ",
    bigCursor: "סמן גדול ",
    readingGuide: "מדריך קריאה ",
    textToSpeech: "טקסט לדיבור ",
    speechToText: "דיבור לטקסט ",
  };
  var options = { labels: labels };
  options.textToSpeechLang = "he";
  options.speechToTextLang = "he";

  return (
    <>
      <Suspense fallback="Loading...">
        <Router>
          <AuthContextProvider>
            <NavBar />
            <AppRouter />
            <Footer1 />
          </AuthContextProvider>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
