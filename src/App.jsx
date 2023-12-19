import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar color="white" textColor="#004225" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;

// definim diferite rute care pot avea istoric diferit
