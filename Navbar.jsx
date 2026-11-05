
import { Moon, Sun, Ticket } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  function goToSection(sectionId) {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <nav className={darkMode ? "navbar dark" : "navbar light"}>
      <a
        href="/"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          goToSection("home");
        }}
      >
        <Ticket size={24} />
        <span>ShowSpot</span>
      </a>

      <div className="nav-links">
        <a href="/" onClick={(e) => { e.preventDefault(); goToSection("home"); }}>Home</a>

        <a href="/" onClick={(e) => { e.preventDefault(); goToSection("events"); }}>Events</a>

        <a href="/" onClick={(e) => { e.preventDefault(); goToSection("favorites"); }}>Favorites</a>

        <Link to="/my-bookings">My Bookings</Link>

        <a href="/" onClick={(e) => { e.preventDefault(); goToSection("about"); }}>About</a>

        <a href="/" onClick={(e) => { e.preventDefault(); goToSection("contact"); }}>Contact</a>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
