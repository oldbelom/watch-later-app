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
      <h1 className="header__title">Watch later</h1>
      {user ? (
        <>
          <nav>
            <NavLink exact={true} to="/">
              Поиск
            </NavLink>
            <NavLink to="/playlist">Плейлист</NavLink>
            <NavLink to="/about">О проекте</NavLink>
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
