import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login/Login";
import PrivateRoutes from "../../Authentication/PrivateRoute/PrivateRoutes";
import Profile from "../../Authentication/Profile/Profile";
import Register from "../../Authentication/Register/Register";
import Main from "../../Layout/Main/Main";
import AllNews from "../../Pages/AllNews/AllNews";
import CategoryNews from "../../Pages/Shared/CategoryNews/CategoryNews";
import Conditions from "../../Pages/Shared/Conditions/Conditions";
import News from "../../Pages/Shared/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllNews />,
        loader: () =>
          fetch("https://dragon-news-server-03182023.vercel.app/news"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-03182023.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-03182023.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/term&Condition",
        element: <Conditions />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
