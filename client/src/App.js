import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import NavBar from "./componnets/features/NavBar/NavBar";
import Footer from "./componnets/features/Footer/Footer";
import AuthContextProvider from "./contexts/AuthContextProvider";


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <AuthContextProvider>
          <NavBar />
          <AppRouter />
          <Footer />
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
