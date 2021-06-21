import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink
            exact
            to="/"
            className={css.headerNavLink}
            activeClassName={css.headerNavLinkActive}
          >
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies"
            className={css.header_nav_link}
            activeClassName={css.headerNavLinkActive}
          >
            <p>Movies</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
