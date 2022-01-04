import HomePage from "./pages/HomePage";
import Playlist from "./pages/Playlist";
import About from "./pages/About";

export const publicRoutes = [
  {
    path: "/login",
    Component: HomePage,
  },
  {
    path: "/signin",
    Component: HomePage,
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
