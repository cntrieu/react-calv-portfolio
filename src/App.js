import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><Home /><About /></div>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>


      {/* <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;