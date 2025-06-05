import { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <header className="main-header">
      <div className="header-left">
        <span className="logo">My Food</span>
      </div>

      <nav className="header-center desktop-nav">
        <button onClick={() => scrollToSection("sec_1")}>Recipes</button>
        <button onClick={() => scrollToSection("sec_2")}>About</button>
        <button onClick={() => scrollToSection("sec_3")}>Calculator</button>
      </nav>

      <div className="header-right">
        <button
          className="burger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="side-menu">
          <button onClick={() => scrollToSection("recipes")}>Recipes</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("calculator")}>
            Calculator
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
