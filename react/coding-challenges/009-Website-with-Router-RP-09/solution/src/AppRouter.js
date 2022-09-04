import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/logo" element={<Logo />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
