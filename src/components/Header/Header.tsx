import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

import "./Header.scss";

const Header = () => {
  const user = true;

  return (
    <div className="header">
      <h1>Watch later</h1>
      {user ? (
        <>
          <nav>
            <NavLink to="/">
              <Button text="Домой" />
            </NavLink>
            <NavLink to="/playlist">
              <Button text="Плейлист" />
            </NavLink>
            <NavLink to="/about">
              <Button text="О проекте" />
            </NavLink>
          </nav>
          <Button text="Выйти" />
        </>
      ) : (
        <>
          <NavLink to="/login">
            <Button text="Регистрация" />
          </NavLink>
          <NavLink to="/signin">
            <Button text="Вход" />
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
