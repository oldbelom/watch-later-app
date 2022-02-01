import React, { useContext } from "react";
import { HashRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";
import { Context } from "./index";
import Loader from "./components/Loader/Loader";

const App = () => {
  const { auth } = useContext(Context);
  const [, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="absolute-center">
        <Loader />
      </div>
    );
  }

  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
};

export default App;
