import React from "react";
import "./Navigation.css";
import { NavItems } from "./NavItems";

const Navigation = () => {
  return (
    <nav className="NavbarItems">
      <div className="ImageBox">
        <img
          src="../../images/ehi logo 1.png"
          alt="Logo"
          className="navbar-logo"
        />{" "}
        YO
      </div>

      <ul>
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
