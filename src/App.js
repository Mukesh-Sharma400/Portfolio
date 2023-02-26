import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
