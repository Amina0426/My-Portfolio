import { useState } from "react";
import "./App.css";
import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AnimatedPage from "./components/AnimatedPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatedPage>
              <Projects />
            </AnimatedPage>
          }
        />
        <Route
          path="/skills"
          element={
            <AnimatedPage>
              <Skills />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [mode, setMode] = useState("light");
  const handleModeClick = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {isMobile && <TopNavbar mode={mode} handleModeClick={handleModeClick} />}
      <div
        className={`container-fluid d-flex justify-content-between ps-0 ${
          mode === "dark" ? "theme-dark" : "theme-light"
        }`}
        style={{ height: "100vh" }}
      >
        {!isMobile && (
          <SideNavbar mode={mode} handleModeClick={handleModeClick} />
        )}

        <div
          className="p-4 d-flex flex-grow-1 justify-content-center align-items-center"
          style={{ width: "calc(100vw - 230px)", height: "100%" }}
        >
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
