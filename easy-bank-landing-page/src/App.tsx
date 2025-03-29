import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import { NavProvider } from "./contexts/NavContext";

const App = () => {
  return (
    <div>
      <NavProvider>
        <NavBar />
        <NavMenu />
        <Home />
        <Footer />
      </NavProvider>
    </div>
  );
};

export default App;
