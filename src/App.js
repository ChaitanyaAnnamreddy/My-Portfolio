import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import MoveToTop from "./components/MoveToTop";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Nav />
          <MoveToTop />

          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
