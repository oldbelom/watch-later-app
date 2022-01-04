import React, { Component } from "react";
import Button from "../Button/Button";

import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Watch later</h1>
        <nav>
          <a href="#">Главная</a>
          <a href="#">Мой плейлист</a>
          <a href="#">О проекте</a>
        </nav>
        <Button text="Войти" />
      </div>
    );
  }
}
