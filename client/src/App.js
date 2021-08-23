import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import Card from "./componnets/features/card/Card";
import ImageSlider from "./componnets/features/Slider/imageSlider";

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
