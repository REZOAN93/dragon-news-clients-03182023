import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllNews from "../../Pages/AllNews/AllNews";
import CategoryNews from "../../Pages/Shared/CategoryNews/CategoryNews";
import News from "../../Pages/Shared/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllNews />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);
