import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import Collapse from "bootstrap/js/dist/collapse";

export default function TopNavbar(props) {
  const handleModeClick = () => {
    props.handleModeClick();
  };
  const collapseRef = useRef(null);
  let bsCollapse = useRef(null);

  useEffect(() => {
    if (collapseRef.current) {
      bsCollapse.current = new Collapse(collapseRef.current, {
        toggle: false,
      });
    }
  }, []);

  const handleNavLinkClick = () => {
    if (bsCollapse.current) {
      bsCollapse.current.hide();
    }
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark d-md-none w-100">
      <div className="container-fluid">
        <span className="navbar-brand">Amina Fatima</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleMobile"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarToggleMobile"
          ref={collapseRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleModeClick();
                handleNavLinkClick();
              }}
            >
              {props.mode === "light" ? (
                <i className="bi bi-moon-fill nav-link before">Dark Mode</i>
              ) : (
                <i className="bi bi-brightness-high-fill nav-link before">
                  Light Mode
                </i>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
