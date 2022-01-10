import HomePage from "./pages/HomePage";
import Playlist from "./pages/Playlist";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import About from "./pages/About";

export const publicRoutes = [
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signin",
    Component: Signin,
  },
];

export const privateRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/playlist",
    Component: Playlist,
  },
  {
    path: "/about",
    Component: About,
  },
];
