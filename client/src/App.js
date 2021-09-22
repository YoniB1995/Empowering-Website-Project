import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import NavBar from "./componnets/features/NavBar/NavBar";
import Footer from "./componnets/features/Footer/Footer";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Contect from "./componnets/pages/Admin/Contect/Contect";


function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <NavBar />
          <AppRouter />
          <Contect/>
          <Footer />
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
