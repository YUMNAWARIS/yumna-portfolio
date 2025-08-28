import React, { useState, useEffect } from "react";
import Preloader from "./components/ui/Preloader";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/ui/Footer";
import Resume from "./pages/Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";
import "./styles/globals.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CertificationsSection from "./pages/Certifications";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<CertificationsSection />} />
          <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
