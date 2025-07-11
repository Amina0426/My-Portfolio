import { NavLink } from "react-router-dom";

export default function SideNavbar(props) {
  const handleModeClick = () => {
    props.handleModeClick();
  };
  return (
    <>
      <div className="navbar d-none d-md-flex" style={{ height: "100vh" }}>
        <aside
          className="d-flex flex-column p-3 h-100"
          style={{ width: "230px", height: "100%" }}
        >
          <span
            className="navbar-brand text-info mb-0 lh-lg fs-4"
            style={{ height: "5%" }}
          >
            <b>Amina Fatima</b>
          </span>
          <hr />
          <ul className="nav nav-pills flex-column gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "bg-info text-white" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "bg-info text-white" : ""}`
                }
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "bg-info text-white" : ""}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "bg-info text-white" : ""}`
                }
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "bg-info text-white" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleModeClick}>
              {props.mode === "light" ? (
                <i className="bi bi-moon-fill nav-link before">Dark Mode</i>
              ) : (
                <i className="bi bi-brightness-high-fill nav-link before">
                  Light Mode
                </i>
              )}
            </li>
          </ul>
          <footer
            className=" mt-auto bg-dark text-white text-center p-2"
            style={{ width: "100%" }}
          >
            <small>© 2025 Amina. All rights reserved.</small>
          </footer>
        </aside>
      </div>
    </>
  );
}
