import { Reorder } from "@mui/icons-material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setExpandNavbar(false)
  },[location])
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/skills">Über mich</Link>
      </div>
    </div>
  );
}
