import React, { useEffect, useState } from "react";
import NavBarUp from "./NavBarUp";
import NavBarDown from "./NavBarDown";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="Navbar-section" id="Navbar-section">
      <NavBarUp className={isScrolled ? "hidden" : ""} />
      <NavBarDown isFixed={isScrolled} />
    </nav>
  );
}

export default NavBar;
