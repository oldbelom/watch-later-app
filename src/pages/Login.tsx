import React, { useState, FormEvent } from "react";
import firebase from "firebase";
import Button from "../components/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const login = async (e: FormEvent) => {
    e.preventDefault();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          setErrorText("Пароль должен быть не менее 6 символов");
        } else if (error.code === "auth/invalid-email") {
          setErrorText("Неверный фомат электронной почты");
        } else if (error.code === "auth/email-already-in-use") {
          setErrorText("Пользователь с таким e-mail уже существует");
        }
      });
  };

  return (
    <form className="container auth-form" onSubmit={login}>
      <h3 className="auth-form__title">Регистрация</h3>
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
        <Button type="submit" text="Зарегистрироваться" />
        {errorText ? <p className="auth-form__error">{errorText}</p> : null}
      </div>
    </form>
  );
};

export default Login;
