import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import { NavBar } from "./componnets/features/Admin/NavBar/NavBar";
import Footer from "./componnets/features/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
