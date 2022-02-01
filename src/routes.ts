import SearchPage from "./pages/SearchPage/SearchPage";
import Playlist from "./pages/Playlist/Playlist";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import About from "./pages/About/About";

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
    Component: SearchPage,
  },
  {
    path: "/playlist",
    Component: Playlist,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/film/:filmname",
    Component: SearchPage,
  },
];
