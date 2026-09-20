import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education Details", link: "#education" },
    { name: "Contact Info", link: "#contact" },
  ];

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="logo">
          Yuvraj's Portfolio<span></span>
        </a>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} onClick={handleNavigation}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark and light mode"
        >
          {darkMode ? "☀" : "🌙"}
        </button>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
