import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../Button/Button";
import { Context } from "../../index";

import "./Header.scss";

const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

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
          <Button onClick={() => auth.signOut()} text="Выйти" />
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
