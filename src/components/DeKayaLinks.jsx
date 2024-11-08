import React from "react";
import { NavLink } from "react-router-dom";

function DeKayaLinks() {
  return (
    <>
      <li className="nav-item" aria-label="main menu links">
        <NavLink to="/" className="nav-link">
          Anasayfa
        </NavLink>
      </li>
      <li className="nav-item" aria-label="main menu links">
        <NavLink to="/hakkimizda" className="nav-link">
          Hakkımızda
        </NavLink>
      </li>
      <li className="nav-item" aria-label="main menu links">
        <NavLink to="/hizmetlerimiz" className="nav-link">
          Hizmetlerimiz
        </NavLink>
      </li>
      <li className="nav-item" aria-label="main menu links">
        <NavLink to="/referanslar" className="nav-link">
          Referanslar
        </NavLink>
      </li>
      <li className="nav-item" aria-label="main menu links">
        <NavLink to="/iletisim" className="nav-link">
          İletişim
        </NavLink>
      </li>
    </>
  );
}

export default DeKayaLinks;
