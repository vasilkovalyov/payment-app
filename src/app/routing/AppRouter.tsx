import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { PublicLayout } from "src/layouts";

import { HomePage } from "src/pages";

import { AppRoutes } from "./appRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: AppRoutes.home,
        element: <HomePage />
      },
      {
        path: AppRoutes.notFound,
        element: <div>404</div>
      }
    ]
  }
]);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
