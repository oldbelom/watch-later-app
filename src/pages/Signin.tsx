import React, { useState, FormEvent } from "react";
import firebase from "firebase";
import Button from "../components/Button/Button";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const signin = async (e: FormEvent) => {
    e.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setErrorText("Неверный пароль");
        } else if (error.code === "auth/invalid-email") {
          setErrorText("Неверный фомат электронной почты");
        } else if (error.code === "auth/user-not-found") {
          setErrorText("Пользователь не найден");
        }
      });
  };

  return (
    <form className="container auth-form" onSubmit={signin}>
      <h3 className="auth-form__title">Вход</h3>
      <input
        type="text"
        placeholder="Введите e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="auth-form__btn-block">
        <Button type="submit" text="Войти" />
        {errorText ? <p className="auth-form__error">{errorText}</p> : null}
      </div>
    </form>
  );
};

export default Signin;
