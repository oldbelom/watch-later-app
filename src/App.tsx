import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    );
  }
}
