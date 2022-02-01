import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../Button/Button";
import { Context } from "../../index";

import "./Header.scss";

const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const burgerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenuVisible = () => {
    if (burgerRef.current !== null && menuRef.current !== null) {
      burgerRef.current.classList.toggle("active");
      menuRef.current.classList.toggle("active");
    }
  };

  const closeMenu = () => {
    if (burgerRef.current !== null && menuRef.current !== null) {
      burgerRef.current.classList.remove("active");
      menuRef.current.classList.remove("active");
    }
  };

  return (
    <div className="header" data-testid="header">
      <h1 className="header__title">Watch later</h1>
      {user ? (
        <>
          <div className="header__menu" ref={menuRef}>
            <nav className="header__nav">
              <NavLink exact={true} to="/" onClick={closeMenu}>
                Поиск
              </NavLink>
              <NavLink to="/playlist" onClick={closeMenu}>
                Плейлист
              </NavLink>
              <NavLink to="/about" onClick={closeMenu}>
                О проекте
              </NavLink>
            </nav>
            <div className="header__user">
              <p className="header__user-name">{user.email}</p>
              <Button
                onClick={() => {
                  auth.signOut();
                  closeMenu();
                }}
                text="Выйти"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header__menu" ref={menuRef}>
            <nav className="header__nav">
              <NavLink to="/login" onClick={closeMenu}>
                Регистрация
              </NavLink>
              <NavLink to="/signin" onClick={closeMenu}>
                Вход
              </NavLink>
            </nav>
          </div>
        </>
      )}
      <div
        ref={burgerRef}
        className="header__burger"
        onClick={toggleMenuVisible}
        data-testid="header-burger"
      >
        <span className="header__burger-item"></span>
        <span className="header__burger-item"></span>
        <span className="header__burger-item"></span>
      </div>
    </div>
  );
};

export default Header;
