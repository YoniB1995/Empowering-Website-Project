import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import NavBar from "./componnets/features/NavBar/NavBar";
import Footer from "./componnets/features/Footer/Footer";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Contect from "./componnets/pages/Admin/Contect/Contect";
import Btn from "./componnets/features/Button/Button";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <NavBar />
          <AppRouter />
          {/* <Footer /> */}
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
